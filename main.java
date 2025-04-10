public class a {
    public static void main(String[] args) {
        int[] n = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
        sortn(n);
        for (int i = 0; i < n.length; i++) {
            System.out.println(n[i]);
        }
    }

    public static void sortn(int[] b) {
        int temp;
        for (int i = 0; i < b.length - 1; i++) { // Loop from 0 to length-1
            for (int j = 0; j < b.length - i - 1; j++) { // Compare up to the last unsorted element
                if (b[j] > b[j + 1]) { // Fix comparison for ascending order
                    temp = b[j];
                    b[j] = b[j + 1];
                    b[j + 1] = temp;
                }
            }
        }
    }
}
