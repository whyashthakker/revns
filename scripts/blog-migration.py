import os
import shutil
from pathlib import Path

def move_blog_files(source_root='z-blogs', dest_root='app/blog/_posts'):
    """
    Move blog files from source directory to destination directory while preserving language structure.
    Special handling for 'en' folder which should be moved to '(en)'.
    """
    # Create Path objects
    source_path = Path(source_root)
    dest_path = Path(dest_root)
    
    # Ensure destination root exists
    dest_path.mkdir(parents=True, exist_ok=True)
    
    # Process each language directory
    for lang_dir in source_path.iterdir():
        if not lang_dir.is_dir():
            continue
            
        # Get language code from directory name
        lang_code = lang_dir.name
        
        # Special handling for 'en' folder
        dest_lang_code = '(en)' if lang_code == 'en' else lang_code
        
        # Create destination language directory
        dest_lang_path = dest_path / dest_lang_code
        dest_lang_path.mkdir(exist_ok=True)
        
        # Move all files from source language directory to destination
        for file_path in lang_dir.glob('*.*'):
            if file_path.is_file():
                dest_file = dest_lang_path / file_path.name
                print(f"Moving {file_path} to {dest_file}")
                shutil.move(str(file_path), str(dest_file))

def main():
    # You can customize these paths as needed
    source_directory = 'z-blogs'
    destination_directory = 'app/blog/_posts'
    
    try:
        move_blog_files(source_directory, destination_directory)
        print("Blog files migration completed successfully!")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()