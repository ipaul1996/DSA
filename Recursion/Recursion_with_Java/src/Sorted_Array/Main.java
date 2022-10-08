package Sorted_Array;

import java.util.Arrays;
import java.util.Scanner;

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
                
        boolean ans = isSorted(arr, n, 0);
        
        if(ans == true) {
            System.out.println("Array is sorted");
        } else {
            System.out.println("Array is not sorted");
        }
        
    }
    
    
    public static boolean isSorted(int[] arr, int size, int current) {
        
        if(size == 0 || size == 1) {
            return true;
        }
        
        if(current == size-1) {
            return true;
        }
        
        if(arr[current] > arr[current+1]) {
            return false;
        } else {
            return isSorted(arr, size, current + 1);
        }
        
    }
}