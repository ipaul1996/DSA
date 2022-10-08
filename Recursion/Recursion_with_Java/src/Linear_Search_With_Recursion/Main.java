package Linear_Search_With_Recursion;

import java.util.*;

class Main {
    
    public static void main(String[] args) {
        
        
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter the size of the array : ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter " + n + " elements of the array");
        
        for(int i = 0; i < n; i++) {      	
        	arr[i] = sc.nextInt();
        }
        
        System.out.print("Input array is : ");
        System.out.println(Arrays.toString(arr));
        
        System.out.println("Enter the number that you want to search in the array : ");
        int key = sc.nextInt();
        
        boolean res = linearSearch(0, arr, n, key);
        System.out.println(res);
        
    }
    
    public static boolean linearSearch(int current, int[] arr, int size, int key) {
        
        if(current == size) {
            return false;
        }
        
        if(key == arr[current]) {
            return true;
        }
        
        
        return linearSearch(current + 1, arr, size, key);
        
    }
}
