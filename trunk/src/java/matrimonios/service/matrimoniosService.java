/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package matrimonios.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import matrimonios.store.ConsultaMatrimoniosStore;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author JoseCarlos
 */
public class matrimoniosService {
    public String consulta(){
        String out = "";
        Connection conexion=null;
         try {
             Class.forName("com.mysql.jdbc.Driver");
             
             conexion = DriverManager.getConnection ("jdbc:mysql://localhost:3307/prjparroquia","root", "usbw");
             
             Statement s = conexion.createStatement();
             ResultSet rs = s.executeQuery ("select * from matrimonios");
             
             while (rs.next()) 
            { 
                out = "{"
                    + "\"totalCount\": \"6679\","
                    + "\"data\": [{\"id\":\""+rs.getInt(1)+"\",\"apellidoPaternoH\":\""+rs.getString(2)+"\",\"apellidoMaternoH\":\""+rs.getString(3)+"\",\"nombreH\":\""+rs.getString(4)+"\",\"apellidoPaternoM\":\""+rs.getString(5)+"\",\"apellidoMaternoM\":\""+rs.getString(6)+"\",\"nombreM\":\""+rs.getString(7)+"\",\"unknow_0\":\""+rs.getString(8)+"\",\"unknow_1\":\""+rs.getString(9)+"\",\"unknow_2\":\""+rs.getString(10)+"\"}]}";
            }
             
             conexion.close();
            
        } catch (SQLException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } finally{
            try {
                conexion.close();
            } catch (SQLException ex) {
                Logger.getLogger(matrimoniosService.class.getName()).log(Level.SEVERE, null, ex);
            }
         }
         return out;
    }
    public String inserta(HttpServletRequest request){
        String out = "";
        StringBuilder inserta;
         try {
             Class.forName("com.mysql.jdbc.Driver");
             
             Connection conexion = DriverManager.getConnection ("jdbc:mysql://localhost:3307/prjparroquia","root", "usbw");
             
           
             
             
             
              BufferedReader reader= request.getReader ();
                inserta = new StringBuilder();
                char [] buf = new char [4 * 1024]; // 4 KB caracteres búfer 
                int len; 
                len = reader.read(buf, 0, buf.length);
                while (len != -1) { 
                    inserta.append(buf, 0, len);
                    len = reader.read(buf, 0, buf.length);
                }
//                String data="[{\"id\":0,\"apellidoPaternoH\":\"h\",\"apellidoMaternoH\":\"y\",\"nombreH\":\"j\",\"apellidoPaternoM\":\"g\",\"apellidoMaternoM\":\"j\",\"nombreM\":\"m\",\"unknow_0\":\"b\",\"unknow_1\":\"f\",\"unknow_2\":\"t\"}]";
                JSONArray jsonArrayDatos=JSONArray.fromObject("["+inserta.toString()+"]");
            
                Statement ss = conexion.createStatement();
                 ResultSet rs = ss.executeQuery ("select max(id)+1 from matrimonios");
                 rs.next();
                 int id=rs.getInt(1);
                
                   Statement s = conexion.createStatement();
            for(int a=0; a<jsonArrayDatos.size(); a++){
                JSONObject obj=jsonArrayDatos.getJSONObject(a);
                    id+=a;
                    String apellidoPaternoH=obj.get("apellidoPaternoH").toString();
                    String apellidoMaternoH=obj.get("apellidoMaternoH").toString();
                    String nombreH=obj.get("nombreH").toString();
                    String apellidoPaternoM=obj.get("apellidoPaternoM").toString();
                    String apellidoMaternoM=obj.get("apellidoMaternoM").toString();
                    String nombreM = obj.get("nombreM").toString();
                    String unknow_0 = obj.get("unknow_0").toString();
                    String unknow_1 = obj.get("unknow_1").toString();
                    String unknow_2 = obj.get("unknow_2").toString();
                    int t = s.executeUpdate ("INSERT INTO matrimonios(id,apellidoPaternoH,apellidoMaternoH,nombreH,apellidoPaternoM,apellidoMaternoM,nombreM ,unknow_0 ,unknow_1 ,unknow_2)VALUES ('"+id+"','"+apellidoPaternoH+"','"+apellidoMaternoH+"','"+nombreH+"','"+apellidoPaternoM+"','"+apellidoMaternoM+"','"+nombreM+"','"+unknow_0+"','"+unknow_1+"','"+unknow_2+"')");
            }
                
                
             
             
             conexion.close();
            
        } catch (SQLException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(ConsultaMatrimoniosStore.class.getName()).log(Level.SEVERE, null, ex);
        } 
         return out;
    }
}
