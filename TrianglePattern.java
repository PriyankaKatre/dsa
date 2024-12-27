class TrianglePattern {
    public void printPatterns(int rows) {
        for (int i = 0; i < rows; i++) {
            for(int j=rows-i-1;j>=1;j--){
                System.out.print(" ");
            }
            for(int k=0;k<i+1;k++){
                System.out.print("*");
                System.out.print(" ");
            }
            System.out.println();
        }
         }

    public static void main(String[] args) {
        TrianglePattern pattern = new TrianglePattern(); // Create an instance of the class
        pattern.printPatterns(5); // Call the method on the instance
    }
}


/*
 * 
 * 
       * * * * *
       * * * * *
       * * * * *
       * * * * *
       * * * * *
 */

 