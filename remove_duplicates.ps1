# Remove duplicate perfumes from JSON file
# Duplicates are identified by the 'id' field (the perfume name)
# Keeps the first occurrence of each perfume

param(
    [string]$JsonFile = "Perfumes_api\perfume.json"
)

function Remove-Duplicates {
    param([string]$FilePath)
    
    try {
        Write-Host "Processing: $FilePath" -ForegroundColor Cyan
        Write-Host ("-" * 50)
        
        # Read and parse JSON
        $content = Get-Content -Path $FilePath -Raw
        $perfumes = ConvertFrom-Json $content
        
        if ($perfumes -isnot [System.Object[]]) {
            Write-Error "ERROR: JSON root must be an array of perfumes"
            return $null
        }
        
        # Track unique IDs and keep first occurrence
        $seenIds = @{}
        $uniquePerfumes = @()
        $duplicateCount = 0
        
        foreach ($perfume in $perfumes) {
            $perfumeId = $perfume.id
            
            if ($seenIds.ContainsKey($perfumeId)) {
                $duplicateCount++
                Write-Host "  ⚠️  Duplicate found: $perfumeId" -ForegroundColor Yellow
            }
            else {
                $seenIds[$perfumeId] = $true
                $uniquePerfumes += $perfume
            }
        }
        
        # Write back the unique perfumes
        $json = $uniquePerfumes | ConvertTo-Json -Depth 10
        Set-Content -Path $FilePath -Value $json -Encoding UTF8
        
        Write-Host ("-" * 50)
        Write-Host "✅ Results:" -ForegroundColor Green
        Write-Host "   Unique perfumes: $($uniquePerfumes.Count)"
        Write-Host "   Duplicates removed: $duplicateCount"
        Write-Host "   File saved: $FilePath" -ForegroundColor Green
        
        return @{
            Unique = $uniquePerfumes.Count
            Duplicates = $duplicateCount
        }
    }
    catch {
        Write-Error "ERROR: $($_.Exception.Message)"
        return $null
    }
}

# Execute
$result = Remove-Duplicates -FilePath $JsonFile
if (-not $result) {
    exit 1
}
