package matrimonios.store;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "generaPDF", urlPatterns = {"/generaPDF.x"})
public class generaPDF extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, ClassNotFoundException, SQLException {
       response.setContentType("application/pdf");
        OutputStream out=response.getOutputStream();
        Connection conexion=null;
        try {
            Document document = new Document(PageSize.LETTER.rotate());
            PdfWriter.getInstance(document, out);
            document.open();
            PdfPTable table = new PdfPTable(10);
            float[] widths2 = { 1f, 1f, 1f, 1f, 1f, 1f, 1f, 1f, 1f, 1f };
            table.setWidths(widths2);
            table.setWidthPercentage(100);
            
            BaseFont bf = BaseFont.createFont("c:/windows/fonts/arial.ttf", BaseFont.IDENTITY_H, true);
      
            Font font = new Font(bf, 8);
            
            Class.forName("com.mysql.jdbc.Driver");
             
            conexion = DriverManager.getConnection ("jdbc:mysql://localhost:3307/prjparroquia","root", "usbw");
             
            Statement s = conexion.createStatement();
            ResultSet rs = s.executeQuery ("select * from matrimonios order by apellidoPaternoH");
             
            rs.next();
             
            PdfPCell cell;
             
            while (rs.next()){
                for(int i=2;i<11;i++){
                    cell = new PdfPCell(new Phrase(""+rs.getString(i),font));
                    cell.setBorder(0);
                    table.addCell(cell);
                }
                cell = new PdfPCell(new Phrase(rs.getString(8)+" "+rs.getString(9)+" "+rs.getString(10),font));
                cell.setBorder(0);
                table.addCell(cell);
            }
             
            conexion.close();
            
            document.add(table);	
            document.close();
        }
        catch (DocumentException exc){
            throw new IOException(exc.getMessage());
        }
        finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(generaPDF.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(generaPDF.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(generaPDF.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(generaPDF.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
