import collections

def solution(participant, completion):
    answer = ''
    
    arr = participant + completion 
    
    counter = collections.Counter(arr)
    
    for k, v in counter.items():
        print(v)
        if v % 2 != 0:
            answer = k
        
    return answer