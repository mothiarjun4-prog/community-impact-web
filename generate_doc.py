import os

files_to_include = [
    'package.json',
    'angular.json',
    'tsconfig.json',
]

source_dirs = ['src']

output_file = 'CommunityImpact_Code_Documentation.md'

def get_files():
    all_files = []
    for f in files_to_include:
        if os.path.exists(f):
            all_files.append(f)
    
    for s_dir in source_dirs:
        for root, dirs, files in os.walk(s_dir):
            if 'node_modules' in root or '.angular' in root:
                continue
            for file in files:
                if file.endswith(('.ts', '.html', '.scss', '.json')):
                    all_files.append(os.path.join(root, file))
    return all_files

def generate_markdown():
    files = get_files()
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("# Community Impact Web Application - Source Code Documentation\n\n")
        f.write("This document contains the source code for the Community Impact project, organized by file path.\n\n")
        f.write("---\n\n")
        
        for file_path in files:
            try:
                with open(file_path, 'r', encoding='utf-8') as src:
                    content = src.read()
                    f.write(f"## File: {file_path}\n\n")
                    
                    # Determine language for syntax highlighting
                    lang = ""
                    if file_path.endswith('.ts'): lang = "typescript"
                    elif file_path.endswith('.html'): lang = "html"
                    elif file_path.endswith('.scss'): lang = "scss"
                    elif file_path.endswith('.json'): lang = "json"
                    
                    f.write(f"```{lang}\n")
                    f.write(content)
                    f.write("\n```\n\n")
                    f.write("---\n\n")
            except Exception as e:
                print(f"Error reading {file_path}: {e}")

if __name__ == "__main__":
    generate_markdown()
    print(f"Generated {output_file}")
