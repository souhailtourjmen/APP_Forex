import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;


public class App {
    public static void main(String[] args) throws Exception {
        final String url = 
                "https://www.stb.com.tn/fr/site/bourse-change/cours-de-change/";
        
        try {
            final Document document = Jsoup.connect(url).get();
           // System.out.println(document.outerHtml());
            
            for (Element row : document.select(
                   "table.cours-de-change  tr")) {
                if (row.select("td:nth-of-type(1)").text().equals("")) {
                    continue;
                }
                else {
                   final String ticker = 
                           row.select("td:nth-of-type(1)").text();
                   final String name = 
                           row.select("td:nth-of-type(2)").text();
                   final String vente = 
                           row.select("td:nth-of-type(3)").text();
                   final String tempPrice1 = 
                           vente.replace(".", "");
                           final String achat = 
                           row.select("td:nth-of-type(4)").text();
                   final String tempPrice2 = 
                           achat.replace(".", "");
                   final double price = Double.parseDouble(tempPrice1);
                   final double price1 = Double.parseDouble(tempPrice2);
                   
                    System.out.println(ticker + "\t " + name + " \t" +price+"\t"+price1);
                }
            }
        }
        catch (Exception ex) {
            ex.printStackTrace();
        }
        
    
    }
}
