
/*
Problem: 1
solution: sudo code
    1. define stack size , maxsize and  top,value
    2. isEmpty
    3. isFull
    4. push 
    5.      if go back 3
    6.          can't push
    7.      else  
    8.          add value 
    9. pop
    10.     if go back 2
    11.         can't delete
    12.     else
    13.         top -1
    14. peek top value in stack
    15. stop

*/ 

#include "stdio.h"

int MAXSIZE = 8;
int stack[8];
int top = -1;
int userValue;


int isEmpty()
{
if (top == -1) return 1;
else return 0;
}

int isFull()
{
if (top == MAXSIZE) return 1;
else return 0;
}

int push(){
    printf ("Enter your value: ");
    scanf("%d",&userValue);
    if (isFull()){
        printf(" You can't push coz stack already full");
    } else
    {   top = top+1;
        stack[top] =userValue;
          printf ("Pushed");
    }
}

void pop(){
      printf ("Enter your value: ");
    scanf("%d",&userValue);
    if (isEmpty){
              printf(" You can't pop coz stack Emapty");
    }else
    {
        int data;
         data =  stack[top] ;
        top = top-1;
         printf("poped");
    }    
}


void peek(){
    printf("%d",stack[top]);
}

void stackE(){
    for (size_t i = 0; i < MAXSIZE; i++)
    {
       printf("%d",stack[i]);
    }
    
}
int main()
{
 int  userOption;
for (size_t i = 0; i < 1000; i++)
{
         printf("\nwhich operation do you do want to Perform: \n1.push\n2.pop\n3.peek\n4.stack\n5.exit\n");
         scanf("%d",&userOption);
         if (userOption==1)  push();
        else if (userOption==2)pop();
         else if (userOption==3)peek();
          else if (userOption==3)stackE();
        else if (userOption==5)break;
 }
}




