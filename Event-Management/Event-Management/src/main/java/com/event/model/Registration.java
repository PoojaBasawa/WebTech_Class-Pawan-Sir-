package com.event.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class Registration {
	private Connection con = null;
	HttpSession se = null;
	Statement st = null;
	ResultSet rs = null;
	PreparedStatement ps = null;

	public Registration(HttpSession session) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver"); // load the drivers
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/event", "root", "tiger");
			// connection with data base
			se = session;
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Registration
	public String Registration(String name, String phone, String email, String pw) {

		String status = "";
		try {
			Statement st = null;
			ResultSet rs = null;
			st = con.createStatement();
			rs = st.executeQuery("select * from users where phone='" + phone + "' or email='" + email + "'");
			boolean b = rs.next();
			if (b) {
				status = "existed";
			} else {
				ps = con.prepareStatement("insert into users values(0,?,?,?,?)");
				ps.setString(1, name);
				ps.setString(2, phone);
				ps.setString(3, email);
				ps.setString(4, pw);
				int a = ps.executeUpdate();
				if (a > 0) {
					status = "success";
				} else {
					status = "failure";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	// Login
	public String login(String email, String pass,HttpSession session) {
		String status1 = "";
		se=session;
		
		System.out.println(se.getAttribute("logoutredirect"));

		try {
			System.out.println("Login method in model");
			ps = con.prepareStatement("select * from users where email=? and password=?");
			ps.setString(1, email);
			ps.setString(2, pass);
			rs = ps.executeQuery();
			if (rs.next()) {
				status1 = "success";
				String id = Integer.toString(rs.getInt("id"));
				String uname = rs.getString("name");
				String em = rs.getString("email");
				se.setAttribute("uid", id);
				se.setAttribute("uname", uname);
				se.setAttribute("uemail", em);
				se.setAttribute("uphone", rs.getString("phone"));
			} else {
				status1 = "failure";
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return status1;
	}

	public ArrayList<Events> getEventInfo(String event_category) {
		ArrayList<Events> al = new ArrayList<>();
		String ec = event_category;
		System.out.println(event_category);
		try {
			ps = con.prepareStatement("select * from events where eventCategory =?");
			ps.setString(1, ec);
			rs = ps.executeQuery();

			while (rs.next()) {
				Events e = new Events();

				e.setEventName(rs.getString("eventName"));
				e.setEventImage(rs.getString("eventImage"));
				e.setEventId(rs.getString("eid"));
				e.setEventDetails(rs.getString("eventDetails"));
				e.setEventCost(rs.getString("eventCost"));
				e.setEventCategory(event_category);

				al.add(e);
				System.out.println("Event object added to arrayList ");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return al;

	}

	public Events getEventFormInfo(String event_id) {
        Statement st = null;
        ResultSet rs = null;
        Events e = null;
        try {
            st = con.createStatement();
            rs = st.executeQuery("select * from events where eid= '" + event_id + "'");
            boolean b = rs.next();
            if (b == true) {
                e = new Events();
                e.setEventName(rs.getString("eventName"));
                e.setEventCost(rs.getString("eventCost"));
            } else {
                e = null;
            }
        } catch (Exception e1) {
            e1.printStackTrace();
        }
        
        return e;
	}
	
	public String Booknow(HttpServletRequest request) {
        String status = "";
        ResultSet rs = null;
        try {
            Statement st = con.createStatement();
            rs = st.executeQuery("select event_id from bookevent where eventdate= '" + request.getParameter("edate") + "'");
            boolean b = rs.next();
            if (b == true) {
                status = "existed";
            } else {
                String qry = "insert into bookevent "
                        + "select 0,eventImage,eventName,'" 
                        + request.getParameter("pno") + "', '" 
                        + request.getParameter("email") + "','" 
                        + request.getParameter("address") +
                        "',eventCost,'" + se.getAttribute("uname") 
                        + "'," + se.getAttribute("uid")
                        + " ,'pending',now(),'" 
                        + request.getParameter("edate") +
                        "' from events where eid=" + 
                        request.getParameter("event_id") + ";";
                int a = st.executeUpdate(qry);
                if (a > 0) {
                    status = "success";
                } else {
                    status = "failure";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

	
	public int deleteevent(int event_id) {
        int status = 0;
        try {
            Statement st = null;
            st = con.createStatement();
            String qry = "update bookevent set status='cancelled' where event_id=' " + event_id + "' ";
            status = st.executeUpdate(qry);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

	
	public ArrayList<Events> geteventstatus() {
        ArrayList<Events> al = new ArrayList<Events>();
        try {
            st = con.createStatement();
            String qry = " select *,date_format(date,'%d %b,%Y') as date1,date_format(eventdate,'%d %b,%Y') as date2 from bookevent where uid='" + se.getAttribute("uid") + " ';";
            rs = st.executeQuery(qry);
            while (rs.next()) {
            	Events d = new Events(); // 1..r---db 2.. pass the data or value to Dproduct class set method
                d.setEventId(rs.getString("event_id"));
                d.setEventImage(rs.getString("event_image"));
                d.setEventName(rs.getString("event_name"));
                d.setEventCost(rs.getString("event_cost"));
                d.setPhone(rs.getString("phone"));
                d.setEmail(rs.getString("email"));
                d.setDate(rs.getString("date1"));
                d.setEventdate(rs.getString("date2"));
                d.setStatus(rs.getString("status"));
                al.add(d);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return al;

    }

	
}
