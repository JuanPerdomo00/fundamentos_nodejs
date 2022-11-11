import time
import os


def main(petition):
    range = 0
    while petition > range:
        print(f"\nHaciendo peticion a http://127.0.0.1:8080/{petition}\n")
        time.sleep(2)
        os.system(f"\ncurl http://127.0.0.1:8080/{petition}\n")
        petition -= 1
    print("\n[*] Terminado proceso")


if __name__ == "__main__":
    main(10)
