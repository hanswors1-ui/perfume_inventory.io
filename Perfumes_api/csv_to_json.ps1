# Convert CSV perfume list to JSON format
# Input: spreadsheet_list.csv
# Output: perfume.json

param(
    [string]$CsvFile = "Perfumes_api\spreadsheet_list.csv",
    [string]$JsonFile = "Perfumes_api\perfume.json"
)

function ConvertCSVToJSON {
    param([string]$CsvPath, [string]$JsonPath)
    
    try {
        Write-Host "Reading CSV file: $CsvPath" -ForegroundColor Cyan
        
        # Read the CSV file
        $content = Get-Content -Path $CsvPath -Raw
        
        # Parse the CSV manually since it has a custom format
        # Format: id:perfume <name>, name:<name>, brand:<brand>, empty:, year:<year>, category:<category>, num:<num>
        
        $perfumes = @()
        $lines = $content -split "`n"
        
        $currentPerfume = @{}
        $lineCount = 0
        
        foreach ($line in $lines) {
            $line = $line.Trim()
            if ([string]::IsNullOrWhiteSpace($line)) { continue }
            
            if ($line -match "^id:perfume\s+(.+)$") {
                # New perfume entry
                if ($currentPerfume.Count -gt 0) {
                    $perfumes += $currentPerfume
                }
                $currentPerfume = @{
                    "id" = $matches[1]
                }
            }
            elseif ($line -match "^name:(.+)$") {
                $currentPerfume["name"] = $matches[1]
            }
            elseif ($line -match "^brand:(.+)$") {
                $currentPerfume["brand"] = $matches[1]
            }
            elseif ($line -match "^year:(.*)$") {
                $currentPerfume["year"] = $matches[1]
            }
            elseif ($line -match "^category:(.+)$") {
                $currentPerfume["category"] = $matches[1]
            }
            # Skip empty: and num: fields
        }
        
        # Add the last perfume
        if ($currentPerfume.Count -gt 0) {
            $perfumes += $currentPerfume
        }
        
        Write-Host "Found $($perfumes.Count) perfume entries" -ForegroundColor Green
        
        # Convert to JSON with proper formatting
        $jsonArray = @()
        foreach ($perfume in $perfumes) {
            $jsonArray += [PSCustomObject]@{
                id       = $perfume["id"]
                name     = $perfume["name"]
                brand    = $perfume["brand"]
                year     = $perfume["year"]
                category = $perfume["category"]
            }
        }
        
        # Convert to JSON with 4-space indentation
        $json = $jsonArray | ConvertTo-Json -Depth 10
        
        # Write to file
        Set-Content -Path $JsonPath -Value $json -Encoding UTF8
        
        Write-Host "✅ JSON file created successfully!" -ForegroundColor Green
        Write-Host "   Total perfumes: $($perfumes.Count)"
        Write-Host "   File saved: $JsonPath" -ForegroundColor Cyan
        
        return $perfumes.Count
    }
    catch {
        Write-Error "ERROR: $($_.Exception.Message)"
        return $null
    }
}

# Execute
$result = ConvertCSVToJSON -CsvPath $CsvFile -JsonPath $JsonFile
if ($result) {
    Write-Host "`nConversion complete!" -ForegroundColor Green
} else {
    Write-Host "`nConversion failed!" -ForegroundColor Red
    exit 1
}
