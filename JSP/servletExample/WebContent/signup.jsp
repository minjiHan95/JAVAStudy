<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<%!String m_name;
	String m_pass;
	int m_age;
	String m_gender;
	String[] m_hobby;
	String m_residence;%>

	<%
		m_name = request.getParameter("m_name");
		m_pass = request.getParameter("m_pass");
		m_age = Integer.parseInt(request.getParameter("m_age"));
		m_gender = request.getParameter("m_gender");
		m_hobby = request.getParameterValues("m_hobby");
		m_residence = request.getParameter("m_residence");
	%>

	�̸�:
	<%=m_name%><br>
	����:
	<%=m_age%><br>
	����:
	<%=m_gender%><br>
	���:
	<%
		for (int i = 0; i < m_hobby.length; i++) {
	%>
	<%=m_hobby[i]%>
	<%
		}
	%><br>

	�ּ�:
	<%=m_residence%>


</body>
</html>