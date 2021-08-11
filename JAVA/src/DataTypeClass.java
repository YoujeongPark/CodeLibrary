import java.io.UnsupportedEncodingException;

public class DataTypeClass {

    public static void main(String[] args) throws UnsupportedEncodingException {

        String text = "Rosy";
        byte[] utf8Chg = text.getBytes("utf-8"); //[B@119d7047
        System.out.println(utf8Chg);

        byte[] utf16Chg = text.getBytes("utf-16"); // [B@6d311334
        System.out.println(utf16Chg);


    }

}
