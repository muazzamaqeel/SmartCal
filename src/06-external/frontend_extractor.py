import os

# folder to scan
ROOT_FOLDER = r"C:\Programming\SmartCal\src\01-frontend\app"

# output file (next to this script)
OUTPUT_FILE = "tsx_files_content.txt"


def extract_tsx_files(root_folder):
    with open(OUTPUT_FILE, "w", encoding="utf-8") as output:

        for root, dirs, files in os.walk(root_folder):
            for file in files:
                if file.endswith(".tsx"):

                    file_path = os.path.join(root, file)

                    output.write("\n")
                    output.write("=" * 80 + "\n")
                    output.write(f"FILE: {file_path}\n")
                    output.write("=" * 80 + "\n\n")

                    try:
                        with open(file_path, "r", encoding="utf-8") as f:
                            content = f.read()
                            output.write(content)
                            output.write("\n\n")

                    except Exception as e:
                        output.write(f"ERROR reading file: {e}\n\n")

    print(f"\nDone. Output saved to: {OUTPUT_FILE}")


if __name__ == "__main__":
    extract_tsx_files(ROOT_FOLDER)