def organizingContainers(container):
    resultState = ""
    c_total = t_total = len(container)    
    total_c = [container[c][t] for c,t in zip(range(c_total),range(c_total))]
    total_t = [0 for x in range(t_total)]

    for c in range(c_total):
        for t in range(t_total):
            total_c[c] = total_c[c]+container[c][t]
            total_t[c] = total_t[c]+container[t][c]

    for c in range(c_total):
        print(c, ") Container total: ", total_c[c], 
        ", ", c, ") type total: ", total_t[c], 
        "\n")
        for t in range(t_total):
            if total_c[c] == total_t[t]:
                resultState = "Possible"
                break;
            else:
                resultState = "Impossible"
  
    return resultState