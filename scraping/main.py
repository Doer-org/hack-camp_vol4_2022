from scraping import scraping,scraping_ramen
import time
import sys

def main(s):
    if s == "ramen":
        scraping_ramen()
    else:
        scraping()
    # while True:
    #     pass

if __name__ == "__main__":
    # time.sleep(30)
    args = sys.argv
    if len(args)==2 and args[1]=="ramen":
        main("ramen")
    else:
        main("okashi")
