package Selection_sort;

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
		
		selectionSort(array, n);
		
	}
	
	public static void selectionSort(int[] arr, int n) {
		
		for(int i = 0; i < arr.length - 1; i++) {
			int minIndex = i;
			for(int j = i + 1; j <= arr.length - 1; j++) {
				if(arr[j] < arr[minIndex]) {
					minIndex = j;

				}
			}
			swap(arr, i, minIndex);
		}
		
		System.out.println(Arrays.toString(arr));
	}

	public static void swap(int[] arr, int i, int j) {
		
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		
	}

}
