from utils.isnum import isnum
from utils.isspace import isspace

def shape_price(string: str) -> int:
    price_string = ""

    for s in string:
        if isspace(s):continue

        if isnum(s):
            price_string+=s
        else:
            break
    try:
        price = int(price_string)
        return price
    except:
        return 0
