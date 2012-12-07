/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package matrimonios.store;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.*;//JSONObject;
import matrimonios.service.matrimoniosService;

/**
 *
 * @author JoseCarlos
 */
@WebServlet(name = "ManageMatrimoniosStore", urlPatterns = {"/ManageMatrimoniosStore.x"})
public class ManageMatrimoniosStore extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        matrimoniosService service;
        String metodo;
        try {
            service = new matrimoniosService();
            metodo = request.getMethod();
            if(metodo.equals("GET")){
                out.println(service.consulta());
            }else if(metodo.equals("POST")){
                service.inserta(request);
                out.print("{\"totalCount\": \"6679\",\"data\": [{\"id\":\"1\",\"apellidoPaternoH\":\"ACEVEDO\",\"apellidoMaternoH\":\"CASILLAS\",\"nombreH\":\"ANTONIO RAFAEL\",\"apellidoPaternoM\":\"VERA\",\"apellidoMaternoM\":\"GARCÍA\",\"nombreM\":\"MARÍA\",\"unknow_0\":\"50\",\"unknow_1\":\"55 v\",\"unknow_2\":\"221\"},{\"id\":\"8\",\"apellidoPaternoH\":\"j\",\"apellidoMaternoH\":\"j\",\"nombreH\":\"g\",\"apellidoPaternoM\":\"k\",\"apellidoMaternoM\":\"n\",\"nombreM\":\"g\",\"unknow_0\":\"b\",\"unknow_1\":\"t\",\"unknow_2\":\"f\"},{\"id\":\"9\",\"apellidoPaternoH\":\"j\",\"apellidoMaternoH\":\"j\",\"nombreH\":\"g\",\"apellidoPaternoM\":\"k\",\"apellidoMaternoM\":\"n\",\"nombreM\":\"g\",\"unknow_0\":\"b\",\"unknow_1\":\"t\",\"unknow_2\":\"f\"},{\"id\":\"10\",\"apellidoPaternoH\":\"ordaz\",\"apellidoMaternoH\":\"crizantos\",\"nombreH\":\"jose carlos\",\"apellidoPaternoM\":\"lupian\",\"apellidoMaternoM\":\"galvez p\",\"nombreM\":\"paulina\",\"unknow_0\":\"kd\",\"unknow_1\":\"fd\",\"unknow_2\":\"fd\"},{\"id\":\"11\",\"apellidoPaternoH\":\"\",\"apellidoMaternoH\":\"\",\"nombreH\":\"\",\"apellidoPaternoM\":\"\",\"apellidoMaternoM\":\"\",\"nombreM\":\"\",\"unknow_0\":\"\",\"unknow_1\":\"\",\"unknow_2\":\"\"},{\"id\":\"12\",\"apellidoPaternoH\":\"Ordaz\",\"apellidoMaternoH\":\"Rosas\",\"nombreH\":\"Carlos\",\"apellidoPaternoM\":\"Crizantos\",\"apellidoMaternoM\":\"Magallón\",\"nombreM\":\"Cecilia \",\"unknow_0\":\"kdk\",\"unknow_1\":\"kdk\",\"unknow_2\":\"kkd\"},{\"id\":\"13\",\"apellidoPaternoH\":\"yh\",\"apellidoMaternoH\":\"tg\",\"nombreH\":\"rf\",\"apellidoPaternoM\":\"ed\",\"apellidoMaternoM\":\"ws\",\"nombreM\":\"ed\",\"unknow_0\":\"rf\",\"unknow_1\":\"tg\",\"unknow_2\":\"yh\"}]}");
            }
        }catch(Exception ex){
            ex.getMessage();
            
        } finally {            
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
