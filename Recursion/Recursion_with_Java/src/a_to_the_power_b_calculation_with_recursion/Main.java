package a_to_the_power_b_calculation_with_recursion;

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the base : ");
		int a = sc.nextInt();
		
		System.out.println("Enter the exponent : ");
		int b = sc.nextInt();
		
		int res = power(a, b);
		
		System.out.println(res);
		
	}
	
	public static int power(int a, int b) {
		
		if(b == 1)
			return a;
		
		int ans = power(a, b/2);
		
		if(b % 2 == 0) {
			return ans * ans;
		} else {
			return a * ans * ans;
		}
		
		
	}

}
