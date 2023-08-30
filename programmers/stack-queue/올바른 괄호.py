def solution(s):
    answer = True
    
    stack = []
    s = list(s)
        

    while len(s) != 0:
        if len(stack) == 0 and s[-1] == "(":
            answer=False
            break
                
        elif s[-1] == ")":
            stack.append(s.pop())
                
        elif s[-1] == "(" and stack[-1] == ")":
            stack.pop()
            s.pop()
    
    if len(stack) != 0 and len(s) == 0:
        answer=False
        

    return answer