/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package matrimonios.store;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author joseo
 */
@WebServlet(name = "ConsultaMatrimoniosStore", urlPatterns = {"/ConsultaMatrimoniosStore.x"})
public class ConsultaMatrimoniosStore extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /*
             * TODO output your page here. You may use following sample code.
             */
             Class.forName("com.mysql.jdbc.Driver");
             
             Connection conexion = DriverManager.getConnection ("jdbc:mysql://localhost:3307/prjparroquia","root", "usbw");
             
             Statement s = conexion.createStatement();
             ResultSet rs = s.executeQuery ("select * from matrimonios");
             
             while (rs.next()) 
            { 
                out.println("{"
                    + "\"totalCount\": \"6679\","
                    + "\"data\": [{\"id\":\""+rs.getInt(1)+"\",\"apellidoPaternoH\":\""+rs.getString(2)+"\",\"apellidoMaternoH\":\""+rs.getString(3)+"\",\"nombreH\":\""+rs.getString(4)+"\",\"apellidoPaternoM\":\""+rs.getString(5)+"\",\"apellidoMaternoM\":\""+rs.getString(6)+"\",\"nombreM\":\""+rs.getString(7)+"\",\"unknow_0\":\""+rs.getString(8)+"\",\"unknow_1\":\""+rs.getString(9)+"\",\"unknow_2\":\""+rs.getString(10)+"\"}]}");
            }
             
             conexion.close();
            
            
        } catch (SQLException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate=\"collapsed\" desc=\"HttpServlet methods. Click on the + sign on the left to edit the code.\">
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
        processRequest(request, response);
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
        processRequest(request, response);
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
