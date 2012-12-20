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
//            if(metodo.equals("GET")){
//               
//            }else
                if(metodo.equals("POST")){
                out.print(service.inserta(request));
            }else if(metodo.equals("DELETE")){
                out.print(service.elimina(request));
            }else if(metodo.equals("PUT")){
                out.print(service.actualiza(request));
            }
        }catch(Exception ex){
            ex.getMessage();
            
        } finally {            
            out.close();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        matrimoniosService service;
        String metodo;
         service = new matrimoniosService();
        
         int start = Integer.parseInt(request.getParameter("start"));
                int limit = Integer.parseInt(request.getParameter("limit"));
                out.println(service.consulta(start,limit));
        
        processRequest(request, response);
        
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
