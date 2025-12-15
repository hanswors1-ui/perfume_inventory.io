#!/usr/bin/env node

/**
 * Remove duplicate perfumes from JSON file.
 * Duplicates are identified by the 'id' field (the perfume name).
 * Keeps the first occurrence of each perfume.
 */

const fs = require('fs');
const path = require('path');

function removeDuplicates(jsonFile) {
    try {
        // Read the JSON file
        const content = fs.readFileSync(jsonFile, 'utf-8');
        const perfumes = JSON.parse(content);

        if (!Array.isArray(perfumes)) {
            console.error('ERROR: JSON root must be an array of perfumes');
            return null;
        }

        // Track unique IDs and keep first occurrence
        const seenIds = new Set();
        const uniquePerfumes = [];
        const duplicates = [];

        perfumes.forEach(perfume => {
            const perfumeId = perfume.id || '';

            if (seenIds.has(perfumeId)) {
                duplicates.push(perfumeId);
                console.log(`  ⚠️  Duplicate found: ${perfumeId}`);
            } else {
                seenIds.add(perfumeId);
                uniquePerfumes.push(perfume);
            }
        });

        // Write back the unique perfumes
        fs.writeFileSync(
            jsonFile,
            JSON.stringify(uniquePerfumes, null, 4),
            'utf-8'
        );

        return { unique: uniquePerfumes.length, duplicates: duplicates.length };

    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error(`ERROR: Invalid JSON - ${error.message}`);
        } else if (error.code === 'ENOENT') {
            console.error(`ERROR: File not found - ${jsonFile}`);
        } else {
            console.error(`ERROR: ${error.message}`);
        }
        return null;
    }
}

// Main execution
const jsonFile = path.join(__dirname, 'Perfumes_api', 'perfume.json');

console.log(`Processing: ${jsonFile}`);
console.log('-'.repeat(50));

const result = removeDuplicates(jsonFile);

if (result) {
    console.log('-'.repeat(50));
    console.log('✅ Results:');
    console.log(`   Unique perfumes: ${result.unique}`);
    console.log(`   Duplicates removed: ${result.duplicates}`);
    console.log(`   File saved: ${jsonFile}`);
} else {
    console.error('❌ Failed to process file');
    process.exit(1);
}
