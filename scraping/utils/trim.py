from utils.isnum import isnum
from utils.isspace import isspace

def shape_price(string: str):
    price_string = ""

    for s in string:
        if isspace(s):continue

        if isnum(s):
            price_string+=s
        else:
            break

    return price_string
