import java.util.Arrays;

public class SortingClass {


    public static void main(String[] args){

        String[] alphabets = {"Kim","Park","Yi", "park"};

        Arrays.sort(alphabets);
        System.out.println(Arrays.toString(alphabets));


        Arrays.sort(alphabets, String.CASE_INSENSITIVE_ORDER);
        System.out.println(Arrays.toString(alphabets));


        Name[] name = new Name[]{
            new Name("rosy", 1993),
            new Name("lisa", 1998)
        };

        Arrays.sort(name);
        for(Name n : name){
            System.out.println(n);
        }


    }

    static class Name implements Comparable<Object>{
        String name;
        int birthYear;

        public Name(String name, int birthYear){
            this.name = name;
            this.birthYear = birthYear;
        }

        public String toString(){
            return name + " " + birthYear + "년생";
        }

        @Override
        public int compareTo(Object object){
            return name.compareTo(((Name) object).name);
        }


    }

}
