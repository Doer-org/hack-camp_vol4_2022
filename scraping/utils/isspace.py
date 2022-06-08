def isspace(s: str) -> bool:
    if s=='\t' or s=='\n' or s=='\v' \
        or s=='\f' or s=='\r' or s==' ':
        return True
    return False


