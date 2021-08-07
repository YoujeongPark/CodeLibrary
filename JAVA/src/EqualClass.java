public class EqualClass {


    public static void main(String[] args){

        String s1 = "abcd"; //  string constant pool에 저장된 String 객체의 주소값
        String s2 = new String("abcd"); // Heap 영역에 생성된 String 객체

        if(s1 == s2) { // "==" 주소값 비교
            System.out.println("두개의 값이 같습니다.");
        }else {
            System.out.println("두개의 값이 같지 않습니다.");
        }

        if(s1.equals(s2)) { // equals 값 자체를 비교
            System.out.println("두개의 값이 같습니다.");
        }else {
            System.out.println("두개의 값이 같지 않습니다.");
        }

    }

}
