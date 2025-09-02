class QuickSort {

    // int a = 10; //init
    // int c = a;  //deep - copies VALUE
    // ++a; // a is equal to 11
    // where as c is 10

    // pivot
    // | Total array ------------------------------------|
    // | partition 1        | pivot     | partition 2    |
    // | if values <= pivot    |           | values > pivot |
    // | then increment start           | then decrement end
    
    public static void main(String[] args) {
        QuickSortHelper quickSortHelper = new QuickSortHelper();
    }

}

class QuickSortHelper {

    //int[] a = {7, 6, 10, 5, 9, 2, 1, 15, 7}; 
    int[] a = {3, 7, 8, 5, 2, 1, 9, 5, 4}; 

    QuickSortHelper() {
        int l = 0; // lower bound
        int h =  a.length-1; // upper bound
        System.out.println("Before Sort :");
        printArrItm();
        quickSort(l, h);
        System.out.println("After Sort :");
        printArrItm();
    }

    void quickSort(int l, int h){
        if(l < h){
            int partitionIndex = partition(l, h);
            //System.out.println("partitionIndex :"+ partitionIndex);
            //System.out.println("quickSort(l,b) : ("+ l +","+ (partitionIndex-1) +")");
            quickSort(l, partitionIndex-1);
            //System.out.println("quickSort(l,b) : ("+ (partitionIndex+1) +","+ h +")");
            quickSort(partitionIndex+1, h);
        }
    }

    int partition(int pLb, int pUb){
        int pivot = a[pLb]; //7
        int start = pLb;
        int end = pUb;
        // System.out.println("start :"+ start);
        // System.out.println("end :"+ end);
        // System.out.println("pivot :"+ pivot);
        
        while(start < end){
            while(start < a.length && a[start] <= pivot){
                start++;
                // System.out.println("start++ :"+ start);
            } 
            while(end >= 0 && a[end] > pivot){
                end--;
                // System.out.println("end-- :"+ end);
            } 
            if(start < end){
                // System.out.println("swap 1");
                swap(start, end); 
            }
        }
        // System.out.println("swap 2");
        return swap(pLb, end);
    }

    private int swap(int start, int end){
        int temp = 0;
        temp = a[start];
        a[start] = a[end];
        a[end] = temp;
        temp = 0;
        // printArrItm();
        return end;
    }

    private void printArrItm(){
        int n =  a.length;
        for(int x = 0; x < n; x++){
            System.out.println("a["+ x + "]:" + a[x]); 
        }
    }

}