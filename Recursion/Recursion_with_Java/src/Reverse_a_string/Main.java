package Reverse_a_string;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter a string : ");
		String str = sc.next();
		
		reverse(0, str);
		
		
	}
	
	public static void reverse(int i, String str) {
		
		if(i > str.length() - 1 - i) {
			System.out.println(str);
			return;
		}
			
		char[] ch = str.toCharArray();
		ch = swap(i, str.length() - 1 - i, ch);
		
		String str1 = new String(ch);
		i++;
		
		reverse(i, str1);
		
		
	}
	
	public static char[] swap(int i, int j, char[] ch) {
		char temp = ch[i];
		ch[i] = ch[j];
		ch[j] = temp;
		return ch;
	}

}
