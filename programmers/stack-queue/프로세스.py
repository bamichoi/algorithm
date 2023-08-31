def solution(priorities, location):    
    answer = 0
    
    idx_arr = [i for i in range(len(priorities))]
    z = list(zip(idx_arr, priorities))
    
    while len(z) != 0 :
        cur = z.pop(0)
        m = max(z, key=lambda x: x[1]) if len(z) > 1 else (0, 0)
                
        if cur[1] < m[1] :
            z.append(cur)
        else:
            answer += 1
            if cur[0] == location:
                break;
            
    
    
    return answer