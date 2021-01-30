
"""finding the leap year """

get_year = int(input("Enter the Year:"))

if  get_year%4 == 0:
    if  get_year%400 == 0:
        if get_year%100==0:
            print(f'{get_year} this is a leap year')
        else:
                print(f'{get_year} this isn\'t a  leap year')
    else:
        print(f'{get_year} this isn\'t a  leap year')
else:
    print('{} this isn\'t a leap year'.format(get_year))
    
