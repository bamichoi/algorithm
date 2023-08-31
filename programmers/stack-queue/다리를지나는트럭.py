def solution(bridge_length, weight, truck_weights):
    answer = 0    
    
    queue = []
    dist = []
    
    while len(queue) != 0 or len(truck_weights) != 0:
        answer += 1
        
        if len(dist) != 0:
            if dist[0] == bridge_length:
                queue.pop(0)
                dist.pop(0)
            for i in range(len(dist)):
                dist[i] += 1
            
        if len(dist) < bridge_length and len(truck_weights) != 0 and sum(queue) + truck_weights[0] <= weight:
            queue.append(truck_weights.pop(0))
            dist.append(1)
            
            
    
    
    
    return answer