with open('src/4th project/words.txt', 'r') as file:  
    try:
        text = file.read().splitlines()
        print (text)
    finally:
        file.close()