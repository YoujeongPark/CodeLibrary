import java.util.Arrays;

public class SortingClass {


    public static void main(String[] args){

        String[] alphabets = {"Kim","Park","Yi", "park"};

        Arrays.sort(alphabets);
        System.out.println(Arrays.toString(alphabets));


        Arrays.sort(alphabets, String.CASE_INSENSITIVE_ORDER);
        System.out.println(Arrays.toString(alphabets));

    }

}
