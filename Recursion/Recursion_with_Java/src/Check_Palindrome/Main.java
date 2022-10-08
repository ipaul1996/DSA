package Check_Palindrome;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the string : ");
		String str = sc.next();
		
		boolean res = checkPalindrome(0, str);
		
		if(res) {
			System.out.println("The string is palindrome");
		} else {
			System.out.println("The string is not palindrome");
		}
	}
	
	public static boolean checkPalindrome(int i, String str) {
		
		if(i > str.length() - 1 - i) {
			return true;
		}
		
		if(str.charAt(i) != str.charAt(str.length() - 1 - i)) {
			return false;
			
		} else {
			i++;
			return checkPalindrome(i, str);
		}
		
	}
}
