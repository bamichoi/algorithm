def solution(phone_book):
    answer = True
    hash = {}
    for i in phone_book:
        hash[i] = 1

    for i in phone_book:
        arr = ""
        for j in i:
            arr += j
        
            if arr in hash and arr != i:
                return False;

    return answer