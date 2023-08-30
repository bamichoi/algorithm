def solution(genres, plays):
    answer = []
    
    hash = {}
    
    indexList = [i for i in range(len(genres))]

    z = list(zip(genres, plays, indexList))
    
    
    for data in z:
        gen = data[0]
        play = data[1]
        idx = data[2]
        hash[gen] = hash.get(gen, [0, []])

        hash[gen][0] += play
        songs = hash[gen][1]
        songs.append((play, idx))
        songs.sort(key=lambda x: (-x[0], x[1]))
        
        
    sorted_hash = sorted(hash.values(), key=lambda x: -x[0], reverse=True)
    sorted_hash.sort(reverse=True)
    
    for i in sorted_hash:
        data = i[1]
        if len(data) >= 2:
            data = i[1][:2]
        for j in data:
            answer.append(j[1])
            
    

    
    return answer