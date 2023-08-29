def solution(clothes):
    answer = 1
    
    hash = {}
    
    for i in range(len(clothes)):
        item = clothes[i][0]
        key = clothes[i][1]
        
        hash[key] = hash.get(key, 0) + 1

    
    for key in hash:
        answer *= (hash[key] + 1)
    
    
      
    
    
    return answer - 1 