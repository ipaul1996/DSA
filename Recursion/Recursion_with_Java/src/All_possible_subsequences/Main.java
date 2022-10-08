package All_possible_subsequences;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		
		List<Character> list = new ArrayList<>();
		
		System.out.println("Enter the string");
		Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine();
		
		char[] ch = str.toCharArray();
		
		genSub(ch, list, 0);

	}

	public static void genSub(char[] ch, List<Character> list, int ind) {
		
		if(list.isEmpty() == false) {
			for(char c : list) {
				System.out.print(c);
			}
			System.out.println();
		} 
		
		
		if(ind == ch.length) return;
		
		for(int i = ind; i < ch.length; i++) {
			
			list.add(ch[i]);
			genSub(ch, list, i+1);
			list.remove(list.size()-1);
			
		}
		
		
		
		
	}

}
