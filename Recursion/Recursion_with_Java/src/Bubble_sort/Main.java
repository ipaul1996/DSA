package Bubble_sort;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the size of the array");
		int n = sc.nextInt();
		
		System.out.println("Enter " + n + " elements one by one");
		int[] array = new int[n];
		
		for(int i = 0; i < n; i++) {
			
			array[i] = sc.nextInt();
		}
		
		bubbleSort(array, n);
		
		
	}
	
	public static void bubbleSort(int[] arr, int n) {
		
		for(int i = 1; i <= n - 1; i++) { //i refers to the rounds
			
			boolean flag = false;
			for(int j = 0; j < n - i; j++) {
				if(arr[j] > arr[j+1]) {					
					swap(arr, j, j+1);
					flag = true;
				}
			}
			
			if(flag == false) break;
			
		}
		
		System.out.println(Arrays.toString(arr));
		
	}
	
	
	
	public static void swap(int[] arr, int i, int j) {
		
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		
	}

}
