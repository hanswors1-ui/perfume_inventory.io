#!/usr/bin/env python3
"""
Remove duplicate perfumes from JSON file.
Duplicates are identified by the 'id' field (the perfume name).
Keeps the first occurrence of each perfume.
"""

import json
import sys
from pathlib import Path

def remove_duplicates(json_file):
    """
    Remove duplicate perfumes from JSON file.
    
    Args:
        json_file: Path to the JSON file
    
    Returns:
        tuple: (unique_count, duplicate_count)
    """
    try:
        # Read the JSON file
        with open(json_file, 'r', encoding='utf-8') as f:
            perfumes = json.load(f)
        
        if not isinstance(perfumes, list):
            print("ERROR: JSON root must be an array of perfumes")
            return None
        
        # Track unique IDs and keep first occurrence
        seen_ids = set()
        unique_perfumes = []
        duplicates = []
        
        for perfume in perfumes:
            perfume_id = perfume.get('id', '')
            
            if perfume_id in seen_ids:
                duplicates.append(perfume_id)
                print(f"  ⚠️  Duplicate found: {perfume_id}")
            else:
                seen_ids.add(perfume_id)
                unique_perfumes.append(perfume)
        
        # Write back the unique perfumes
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(unique_perfumes, f, indent=4, ensure_ascii=False)
        
        return len(unique_perfumes), len(duplicates)
    
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON - {e}")
        return None
    except FileNotFoundError:
        print(f"ERROR: File not found - {json_file}")
        return None
    except Exception as e:
        print(f"ERROR: {e}")
        return None


if __name__ == "__main__":
    # Path to the perfume.json file
    json_file = Path(__file__).parent / "Perfumes_api" / "perfume.json"
    
    print(f"Processing: {json_file}")
    print("-" * 50)
    
    result = remove_duplicates(str(json_file))
    
    if result:
        unique_count, duplicate_count = result
        print("-" * 50)
        print(f"✅ Results:")
        print(f"   Unique perfumes: {unique_count}")
        print(f"   Duplicates removed: {duplicate_count}")
        print(f"   File saved: {json_file}")
    else:
        print("❌ Failed to process file")
        sys.exit(1)
