package Array_Sum;

import java.util.*;

class Main {
    
    public static void main(String[] args) {
        
    	Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter the size of the array : ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        
        System.out.println("Enter " + n + " elements");
        
        for(int i = 0; i < n; i++) {
        	arr[i] = sc.nextInt();
        }
        
        System.out.println("Your array is : " + Arrays.toString(arr));
        
        int res = arraySum(arr, n, 0, 0);
        System.out.println(res);
        
    }
    
    
    public static int arraySum(int[] arr, int size, int current, int sum) {
        
        if(size == 0) {
            return 0;
        }
        
        if(current == size-1) {
            return sum + arr[current];
        }
        
       return arraySum(arr, size, current + 1, sum + arr[current]);
        
    }
}
