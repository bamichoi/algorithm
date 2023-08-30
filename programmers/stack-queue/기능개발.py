def solution(progresses, speeds):
    answer = []
    
    progStack = progresses[::-1]
    speedStack = speeds[::-1]
    
    while len(progStack) != 0:
        tmp = 0
        for i in range(len(progStack)):
            progStack[i] += speedStack[i]
        
        while progStack and progStack[-1] >= 100:
            progStack.pop()
            speedStack.pop()
            tmp += 1
        
        if tmp != 0:
            answer.append(tmp)
            
    
            
    return answer