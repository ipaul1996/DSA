package Binary_Search_With_Recursion;

import java.util.*;

class Main {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array : ");
        int n = sc.nextInt();
        
        System.out.println("Enter " + n + " elements of the array : ");
        int[] arr = new int[n];
        
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println("Enter the target number : ");
        int k = sc.nextInt();
               
        int res = binarySearch(arr, 0, n-1, k);
        System.out.println(res); 
    }
    
    
    public static int binarySearch(int[] arr, int s, int e, int k) {
        
        if(s > e) {
            return -1;
        }
        
        int mid = s + (e-s)/2;
        
        if(k == arr[mid]) {
            return 1;
            
        } else if(k > arr[mid]) {
            return binarySearch(arr, mid + 1, e, k);
            
        } else {
            return binarySearch(arr, s, mid - 1, k);
            
        }
        
        
    }
}
