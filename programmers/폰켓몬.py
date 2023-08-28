def solution(nums):
    answer = 0

    t = len(nums) / 2
    
    dic = dict.fromkeys(nums)

    if t <= len(dic):
        answer = t
    else:
        answer = len(dic)

    return answer