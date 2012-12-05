/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package matrimonios.store;

import java.io.*;
import java.util.Enumeration;
import java.util.Iterator;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import matrimonios.service.matrimoniosService;
import net.sf.json.util.JSONTokener;

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
        StringBuilder inserta;
        matrimoniosService service;
        String metodo;
        try {
            service = new matrimoniosService();
            metodo = request.getMethod();
            if(metodo.equals("GET")){
                out.println(service.consulta());
            }else if(metodo.equals("POST")){
                BufferedReader reader= request.getReader ();
                inserta = new StringBuilder();
                char [] buf = new char [4 * 1024]; // 4 KB caracteres búfer 
                int len; 
                len = reader.read(buf, 0, buf.length);
                while (len != -1) { 
                    out.write(buf, 0, len); 
                    inserta.append(buf, 0, len);
                    len = reader.read(buf, 0, buf.length);
                }
//                JSONObject newObj = new JSONObject(inserta.toString());
//                Enumeration eNames = (Enumeration) newObj.keys(); //gets all the keys
//
//                while(eNames.hasMoreElements())
//                {
//                   eNames.hasMoreElements();
//                }
                JSONObject jsonObject = (JSONObject) new JSONTokener(inserta.toString()).nextValue();

                Iterator iterKey = jsonObject.keys(); // create the iterator for the json object.
                while(iterKey.hasNext()) {
                    String jsonKey = (String)iterKey.next(); //retrieve every key ex: name, age
                    String jsonValue = jsonObject.getString(jsonKey); //use key to retrieve value from 

                    //This is a json object and will display the key value pair.

                    System.out.println(jsonKey  + " --> " + jsonValue  );
                }
                
                out.append("veamos");
                
            }
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
