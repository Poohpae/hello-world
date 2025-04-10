public class a {
public static void main(String[] args) {
int[] n = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
sortn(n);
for(int i=0;i<n.length;i++){
System.out.println(n[i]);
}
}
public static void sortn(int[] b){
int temp;
for(int i=0;i<b.length;i++){
for(int j=0;j<b.length;j++){
if(b[i]<b[j]){
temp=b[i];
b[i]=b[j];
b[j]=temp;
}}}
}
}
