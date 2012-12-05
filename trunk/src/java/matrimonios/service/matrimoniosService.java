/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package matrimonios.service;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import matrimonios.store.ConsultaMatrimoniosStore;

/**
 *
 * @author JoseCarlos
 */
public class matrimoniosService {
    public String consulta(){
        String out = "";
         try {
             Class.forName("com.mysql.jdbc.Driver");
             
             Connection conexion = DriverManager.getConnection ("jdbc:mysql://localhost:3307/prjparroquia","root", "usbw");
             
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
        } 
         return out;
    }
}
