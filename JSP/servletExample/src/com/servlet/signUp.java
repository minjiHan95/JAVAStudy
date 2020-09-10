package com.servlet;

import java.util.*;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.jmx.snmp.Enumerated;

@WebServlet("/signUp")
public class signUp extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String m_name = request.getParameter("m_name");
		String m_email = request.getParameter("m_email");
		String m_sex = request.getParameter("m_sex");
		String m_residence = request.getParameter("m_residence");
		
		PrintWriter pw = response.getWriter();
		pw.print("<html>");
		pw.print("</html>");
		pw.print("<head>");
		pw.print("</head>");
		pw.print("<body>");

		pw.print("name: "+m_name+"<br>");
		pw.print("email: "+m_email+"<br>");
		pw.print("sex: "+m_sex+"<br>");
		pw.print("residence: "+m_residence+"<br>");
		pw.print("</body>");
		
		Enumeration<String> names = request.getParameterNames();
		while (names.hasMoreElements()) {
			String name = (String) names.nextElement();
			System.out.println("name : " + name);
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("==doPost method==");
		
		//method가 post든 get이든 doGet메서드에서 실행한다.
		doGet(request, response);
	}

}
