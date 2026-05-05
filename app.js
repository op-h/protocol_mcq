const lectures = [
  {
    id: "lec1",
    title: "Network Architecture",
    label: "Lecture 1",
    questions: [
      {
        text: "What is meant by network architecture?",
        answers: [
          "A set of physical devices in a network",
          "A set of layers and protocols",
          "A collection of routers and switches",
          "A type of network topology",
          "A communication medium"
        ],
        correct: 1
      },
      {
        text: "Why are networks organized into layers?",
        answers: [
          "To increase hardware cost",
          "To reduce design complexity",
          "To eliminate protocols",
          "To increase transmission speed only",
          "To avoid using interfaces"
        ],
        correct: 1
      },
      {
        text: "What does a network protocol define?",
        answers: [
          "Hardware specifications only",
          "Rules for communication between devices",
          "Only encryption methods",
          "Only routing paths",
          "Only data storage rules"
        ],
        correct: 1
      },
      {
        text: "Which of the following is part of the protocol process?",
        answers: [
          "Hardware installation",
          "Message format structure",
          "Device manufacturing",
          "Cable installation",
          "Power consumption"
        ],
        correct: 1
      },
      {
        text: "Which model is mentioned for network layering?",
        answers: ["HTTP Model", "FTP Model", "OSI Model", "SMTP Model", "DNS Model"],
        correct: 2
      },
      {
        text: "What is one benefit of a layered model?",
        answers: [
          "Increases complexity",
          "Makes communication harder",
          "Breaks communication into smaller parts",
          "Eliminates protocols",
          "Reduces compatibility"
        ],
        correct: 2
      },
      {
        text: "How many layers are in the OSI model?",
        answers: ["4", "5", "6", "7", "8"],
        correct: 3
      },
      {
        text: "Which organization developed the OSI model?",
        answers: ["IEEE", "ISO", "DoD", "ITU", "ANSI"],
        correct: 1
      },
      {
        text: "What is the main function of the Physical layer?",
        answers: [
          "Routing packets",
          "Error handling",
          "Transmitting bits over medium",
          "Data encryption",
          "Session management"
        ],
        correct: 2
      },
      {
        text: "Which device operates at the Physical layer?",
        answers: ["Router", "Switch", "Repeater", "Gateway", "Bridge"],
        correct: 2
      },
      {
        text: "What does the Data Link layer handle?",
        answers: [
          "End-to-end delivery",
          "Node-to-node delivery",
          "Application services",
          "Data encryption",
          "Session control"
        ],
        correct: 1
      },
      {
        text: "What type of addressing is used in the Data Link layer?",
        answers: [
          "Logical addressing",
          "Port addressing",
          "Physical (MAC) addressing",
          "IP addressing",
          "URL addressing"
        ],
        correct: 2
      },
      {
        text: "What is the primary role of the Network layer?",
        answers: ["Compression", "Routing packets", "Session control", "Encryption", "Data formatting"],
        correct: 1
      },
      {
        text: "Which protocol belongs to the Transport layer?",
        answers: ["IP", "TCP", "HTTP", "FTP", "SNMP"],
        correct: 1
      },
      {
        text: "What type of delivery does the Transport layer provide?",
        answers: ["Node-to-node", "End-to-end", "Device-to-device", "LAN-to-LAN", "Bit-to-bit"],
        correct: 1
      },
      {
        text: "What is the function of the Session layer?",
        answers: [
          "Routing",
          "Data encryption",
          "Establishing sessions between users",
          "Physical transmission",
          "Addressing"
        ],
        correct: 2
      },
      {
        text: "Which layer is responsible for data encryption?",
        answers: ["Network", "Transport", "Session", "Presentation", "Data Link"],
        correct: 3
      },
      {
        text: "Which protocols are part of the Application layer?",
        answers: ["TCP and UDP", "IP and ARP", "HTTP and FTP", "MAC and LLC", "ICMP and IGMP"],
        correct: 2
      },
      {
        text: "What does PDU stand for in networking?",
        answers: [
          "Protocol Data Unit",
          "Packet Delivery Unit",
          "Physical Data Utility",
          "Process Data Unit",
          "Protocol Device Utility"
        ],
        correct: 0
      },
      {
        text: "In data encapsulation, what does the Network layer create?",
        answers: ["Frames", "Bits", "Segments", "Packets", "Signals"],
        correct: 3
      },
      {
        text: "How many layers are in the TCP/IP model?",
        answers: ["3", "4", "5", "6", "7"],
        correct: 1
      },
      {
        text: "Which TCP/IP layer corresponds to OSI Transport layer?",
        answers: ["Application", "Internet", "Network Access", "Transport", "Session"],
        correct: 3
      },
      {
        text: "What type of network covers a city?",
        answers: ["LAN", "WAN", "MAN", "PAN", "SAN"],
        correct: 2
      },
      {
        text: "What is a WAN primarily used for?",
        answers: [
          "Small office communication",
          "Campus networking",
          "Long-distance communication",
          "Home networking",
          "Device pairing"
        ],
        correct: 2
      },
      {
        text: "What is the function of a router?",
        answers: [
          "Regenerate signals",
          "Filter frames",
          "Forward packets based on Layer 3 addresses",
          "Broadcast data to all ports",
          "Convert protocols only"
        ],
        correct: 2
      }
    ]
  },
  {
    id: "lec2",
    title: "IPv4 and IPv6 Addressing",
    label: "Lecture 2",
    questions: [
      {
        text: "At which layer does communication occur from source to destination across the Internet?",
        answers: ["Physical layer", "Data Link layer", "Network layer", "Transport layer", "Application layer"],
        correct: 2
      },
      {
        text: "What is the size of an IPv4 address?",
        answers: ["16 bits", "32 bits", "64 bits", "128 bits", "256 bits"],
        correct: 1
      },
      {
        text: "What is a datagram in IPv4?",
        answers: [
          "A fixed-length packet",
          "A routing table",
          "A variable-length packet with header and data",
          "A physical signal",
          "A MAC address"
        ],
        correct: 2
      },
      {
        text: "What is the minimum size of an IPv4 header?",
        answers: ["10 bytes", "20 bytes", "32 bytes", "40 bytes", "60 bytes"],
        correct: 1
      },
      {
        text: "Which field identifies the IP version in IPv4?",
        answers: ["TTL", "Protocol", "Version", "Header Length", "Flags"],
        correct: 2
      },
      {
        text: "What does TTL stand for in IPv4?",
        answers: [
          "Total Transmission Length",
          "Time to Live",
          "Transfer Time Limit",
          "Transmission Type Level",
          "Traffic Transfer Load"
        ],
        correct: 1
      },
      {
        text: "Which IPv4 field is used for error checking of the header?",
        answers: ["Protocol", "Identification", "Header Checksum", "Flags", "Offset"],
        correct: 2
      },
      {
        text: "Which addressing method divides IPv4 into classes A, B, C, D, and E?",
        answers: [
          "Classless addressing",
          "Dynamic addressing",
          "Classful addressing",
          "Logical addressing",
          "Physical addressing"
        ],
        correct: 2
      },
      {
        text: "What is the maximum size of an IPv4 datagram?",
        answers: ["1024 bytes", "4096 bytes", "32768 bytes", "65535 bytes", "131072 bytes"],
        correct: 3
      },
      {
        text: "Which field specifies the next-level protocol in IPv4?",
        answers: ["TTL", "Protocol", "Flags", "Offset", "Version"],
        correct: 1
      },
      {
        text: "What is the purpose of the Identification field in IPv4?",
        answers: ["Encryption", "Routing", "Fragment identification", "Address mapping", "Error correction"],
        correct: 2
      },
      {
        text: "Which of the following is a private IPv4 address range?",
        answers: [
          "8.0.0.0 - 8.255.255.255",
          "100.0.0.0 - 100.255.255.255",
          "172.16.0.0 - 172.31.255.255",
          "200.0.0.0 - 200.255.255.255",
          "224.0.0.0 - 224.255.255.255"
        ],
        correct: 2
      },
      {
        text: "What problem did classful addressing create?",
        answers: ["Too many routers", "Excessive delay", "Wasting IP addresses", "Poor encryption", "Low bandwidth"],
        correct: 2
      },
      {
        text: "What is the purpose of subnetting?",
        answers: [
          "Increase physical connections",
          "Divide a large network into smaller networks",
          "Encrypt data",
          "Improve signal strength",
          "Eliminate routing"
        ],
        correct: 1
      },
      {
        text: "What happens when one host bit is borrowed in subnetting?",
        answers: ["Hosts double", "Subnets double", "Addresses are lost", "Routing stops", "TTL increases"],
        correct: 1
      },
      {
        text: "What does VLSM stand for?",
        answers: [
          "Variable Length Subnet Mask",
          "Virtual LAN System Model",
          "Verified Logical Subnet Method",
          "Variable Link Switching Method",
          "Virtual Layer Security Mechanism"
        ],
        correct: 0
      },
      {
        text: "What is the main function of NAT?",
        answers: [
          "Encrypt packets",
          "Translate domain names",
          "Map internal addresses to external addresses",
          "Increase bandwidth",
          "Control routing protocols"
        ],
        correct: 2
      },
      {
        text: "What is port forwarding used for?",
        answers: [
          "Increasing packet size",
          "Redirecting communication requests",
          "Encrypting ports",
          "Blocking traffic",
          "Compressing data"
        ],
        correct: 1
      },
      {
        text: "What is the size of an IPv6 address?",
        answers: ["32 bits", "64 bits", "96 bits", "128 bits", "256 bits"],
        correct: 3
      },
      {
        text: "How many hexadecimal digits are in an IPv6 address?",
        answers: ["16", "24", "32", "48", "64"],
        correct: 2
      },
      {
        text: "Which IPv6 feature eliminates the need for NAT?",
        answers: [
          "Smaller headers",
          "Multicast",
          "Globally unique addresses",
          "Stateless configuration",
          "QoS support"
        ],
        correct: 2
      },
      {
        text: "What does the double colon (::) represent in IPv6?",
        answers: [
          "Separator between fields",
          "Compression of successive zeros",
          "Encryption indicator",
          "Broadcast address",
          "Routing prefix"
        ],
        correct: 1
      },
      {
        text: "Which IPv6 address type delivers packets to the most reachable member of a group?",
        answers: ["Unicast", "Broadcast", "Multicast", "Anycast", "Hybridcast"],
        correct: 3
      },
      {
        text: "What is the last 64 bits of an IPv6 address called?",
        answers: ["Global prefix", "Subnet ID", "Interface identifier", "Network ID", "Routing ID"],
        correct: 2
      },
      {
        text: "Which transition technique allows IPv4 and IPv6 to run simultaneously?",
        answers: ["Tunneling", "Header translation", "Dual stack", "NAT", "Fragmentation"],
        correct: 2
      }
    ]
  },
  {
    id: "lec3",
    title: "ICMP, DHCP, IPSec and Forwarding",
    label: "Lecture 3",
    questions: [
      {
        text: "What is the main purpose of ICMP?",
        answers: [
          "Encrypt data packets",
          "Provide routing paths",
          "Compensate for IP deficiencies",
          "Assign IP addresses",
          "Compress data"
        ],
        correct: 2
      },
      {
        text: "ICMP is classified under which layer?",
        answers: ["Physical layer", "Data Link layer", "Network layer", "Transport layer", "Application layer"],
        correct: 2
      },
      {
        text: "How are ICMP messages transmitted?",
        answers: [
          "Directly to the data link layer",
          "Through TCP segments",
          "Encapsulated inside IP datagrams",
          "Using UDP packets",
          "Via application protocols"
        ],
        correct: 2
      },
      {
        text: "Which of the following is a type of ICMP message?",
        answers: [
          "Routing message",
          "Error reporting message",
          "Encryption message",
          "Authentication message",
          "Fragmentation message"
        ],
        correct: 1
      },
      {
        text: "What does the Ping application use?",
        answers: ["TCP", "UDP", "ICMP Echo Request/Reply", "DHCP", "IPSec"],
        correct: 2
      },
      {
        text: "What does Ping check?",
        answers: ["Network speed", "Host availability", "Encryption level", "Packet size", "IP class"],
        correct: 1
      },
      {
        text: "What is the function of Traceroute?",
        answers: [
          "Assign IP addresses",
          "Encrypt packets",
          "Record the route to a destination",
          "Compress data",
          "Block traffic"
        ],
        correct: 2
      },
      {
        text: "What does DHCP stand for?",
        answers: [
          "Dynamic Host Communication Protocol",
          "Data Handling Control Protocol",
          "Dynamic Host Configuration Protocol",
          "Distributed Host Control Protocol",
          "Data Host Configuration Process"
        ],
        correct: 2
      },
      {
        text: "What is the main goal of DHCP?",
        answers: [
          "Encrypt IP packets",
          "Assign IP addresses dynamically",
          "Control routing tables",
          "Filter network traffic",
          "Provide error correction"
        ],
        correct: 1
      },
      {
        text: "What is the first message sent by a host in DHCP?",
        answers: ["DHCP request", "DHCP ack", "DHCP discover", "DHCP offer", "DHCP reply"],
        correct: 2
      },
      {
        text: "What message does the server send after DHCP discover?",
        answers: ["DHCP ack", "DHCP request", "DHCP offer", "DHCP confirm", "DHCP response"],
        correct: 2
      },
      {
        text: "Why is a relay agent needed in DHCP?",
        answers: [
          "To encrypt messages",
          "To compress packets",
          "Because broadcast cannot pass routers",
          "To assign MAC addresses",
          "To speed up transmission"
        ],
        correct: 2
      },
      {
        text: "What additional information can DHCP provide besides IP address?",
        answers: ["Encryption keys", "MAC address", "DNS server address", "Packet size", "Routing protocol"],
        correct: 2
      },
      {
        text: "What is IPSec?",
        answers: [
          "A routing protocol",
          "A transport protocol",
          "A collection of security protocols",
          "A switching method",
          "A subnetting technique"
        ],
        correct: 2
      },
      {
        text: "Which organization designed IPSec?",
        answers: ["ISO", "IEEE", "IETF", "ITU", "ANSI"],
        correct: 2
      },
      {
        text: "What does IPSec provide?",
        answers: [
          "Packet compression",
          "Authentication and confidentiality",
          "Routing optimization",
          "Address translation",
          "Packet fragmentation"
        ],
        correct: 1
      },
      {
        text: "In which mode does IPSec NOT protect the IP header?",
        answers: ["Tunnel mode", "Transport mode", "Hybrid mode", "Secure mode", "Relay mode"],
        correct: 1
      },
      {
        text: "Which IPSec mode protects the original IP header?",
        answers: ["Transport mode", "Hybrid mode", "Tunnel mode", "Secure mode", "Relay mode"],
        correct: 2
      },
      {
        text: "What is packet forwarding?",
        answers: [
          "Encrypting packets",
          "Assigning IP addresses",
          "Moving packets between interfaces",
          "Compressing data",
          "Blocking traffic"
        ],
        correct: 2
      },
      {
        text: "What happens if TTL reaches zero during forwarding?",
        answers: [
          "Packet is encrypted",
          "Packet is forwarded",
          "Packet is discarded",
          "Packet is compressed",
          "Packet is duplicated"
        ],
        correct: 2
      },
      {
        text: "What lookup method is used in forwarding tables?",
        answers: ["Shortest Path Match", "Longest Prefix Match", "Fast Route Match", "Exact Match", "Binary Match"],
        correct: 1
      },
      {
        text: "What is Process Switching?",
        answers: [
          "Hardware-based forwarding",
          "CPU processes every packet",
          "Cached forwarding",
          "Precomputed routing",
          "Software-defined routing"
        ],
        correct: 1
      },
      {
        text: "What is Fast Switching based on?",
        answers: [
          "Processing all packets individually",
          "Ignoring routing tables",
          "Caching the first packet's result",
          "Using only hardware",
          "Encrypting packets"
        ],
        correct: 2
      },
      {
        text: "What does CEF stand for?",
        answers: [
          "Centralized Efficient Forwarding",
          "Cisco Express Forwarding",
          "Controlled Ethernet Forwarding",
          "Core Enhanced Forwarding",
          "Cached Express Flow"
        ],
        correct: 1
      },
      {
        text: "What is a key feature of SDN?",
        answers: [
          "Combines control and data planes",
          "Removes routers",
          "Separates control and data planes",
          "Uses only hardware control",
          "Eliminates switching"
        ],
        correct: 2
      }
    ]
  },
  {
    id: "lec4",
    title: "Routing",
    label: "Lecture 4",
    questions: [
      {
        text: "What is routing?",
        answers: [
          "Encrypting packets",
          "Forwarding packets between networks using best path",
          "Compressing data",
          "Blocking traffic",
          "Monitoring bandwidth"
        ],
        correct: 1
      },
      {
        text: "What does a routing table contain?",
        answers: [
          "All possible paths",
          "Only longest paths",
          "Only best routes for each destination",
          "Random paths",
          "Security keys"
        ],
        correct: 2
      },
      {
        text: "Static routing is configured by whom?",
        answers: ["End user", "Router automatically", "Administrator manually", "ISP only", "Software vendor"],
        correct: 2
      },
      {
        text: "Static routing is typically used in:",
        answers: ["Large networks", "Medium networks", "Small organizations", "Cloud systems", "Wireless systems"],
        correct: 2
      },
      {
        text: "Dynamic routing means:",
        answers: ["Manual updates", "Automatic routing updates", "No routing", "Static paths", "Fixed topology"],
        correct: 1
      },
      {
        text: "Dynamic routing learns paths via:",
        answers: ["User input", "Manual tables", "Periodic updates from routers", "DNS", "Firewalls"],
        correct: 2
      },
      {
        text: "Dynamic routing selects:",
        answers: ["Longest path", "Random path", "Shortest/best path", "Static path", "Encrypted path"],
        correct: 2
      },
      {
        text: "Static routing is considered:",
        answers: ["Slow and insecure", "Secure and fast", "Dynamic and slow", "Complex and unsafe", "Unreliable"],
        correct: 1
      },
      {
        text: "One advantage of dynamic routing is:",
        answers: [
          "Requires manual setup",
          "No topology updates",
          "Automatically updates topology changes",
          "Less scalable",
          "Needs fewer routers"
        ],
        correct: 2
      },
      {
        text: "Dynamic routing reduces:",
        answers: ["Security", "Administrative work", "Packet size", "Latency only", "Bandwidth"],
        correct: 1
      },
      {
        text: "Static routing requires:",
        answers: ["No destination info", "Destination network ID", "Encryption key", "MAC address only", "DNS records"],
        correct: 1
      },
      {
        text: "Dynamic routing is suitable for:",
        answers: ["Small networks only", "Large organizations", "Single router setups", "Offline systems", "Standalone PCs"],
        correct: 1
      },
      {
        text: "Routing protocols are used in:",
        answers: ["Static routing", "Dynamic routing", "Encryption", "Compression", "Switching only"],
        correct: 1
      },
      {
        text: "Which routing type needs periodic updates?",
        answers: ["Static", "Manual", "Dynamic", "Hybrid", "Offline"],
        correct: 2
      },
      {
        text: "Static routing is best for networks with:",
        answers: ["100+ routers", "50 routers", "10-15 routers", "Unlimited routers", "No routers"],
        correct: 2
      },
      {
        text: "What is the main function of routing?",
        answers: ["Encrypt data", "Store data", "Forward packets across networks", "Filter packets", "Analyze traffic"],
        correct: 2
      },
      {
        text: "Dynamic routing eliminates the need to:",
        answers: [
          "Monitor traffic",
          "Know destination networks manually",
          "Use routers",
          "Configure IP",
          "Maintain hardware"
        ],
        correct: 1
      },
      {
        text: "Which routing type is more scalable?",
        answers: ["Static", "Manual", "Dynamic", "Fixed", "None"],
        correct: 2
      },
      {
        text: "Static routing lacks:",
        answers: ["Security", "Speed", "Automatic updates", "Simplicity", "Control"],
        correct: 2
      },
      {
        text: "Routing tables are used to:",
        answers: ["Store passwords", "Choose best path", "Encrypt packets", "Block traffic", "Detect viruses"],
        correct: 1
      },
      {
        text: "Dynamic routing depends on:",
        answers: [
          "Manual entries",
          "Periodic router communication",
          "Fixed topology",
          "No updates",
          "Static paths"
        ],
        correct: 1
      },
      {
        text: "One disadvantage of static routing is:",
        answers: ["High automation", "Requires manual updates", "Low security", "High cost", "Complex protocols"],
        correct: 1
      },
      {
        text: "Which routing type adapts to topology changes?",
        answers: ["Static", "Fixed", "Dynamic", "Manual", "Local"],
        correct: 2
      },
      {
        text: "Static routing is NOT ideal for:",
        answers: [
          "Small networks",
          "Simple setups",
          "Large dynamic networks",
          "Secure systems",
          "Controlled environments"
        ],
        correct: 2
      },
      {
        text: "Dynamic routing protocols help routers:",
        answers: ["Encrypt data", "Learn network paths automatically", "Store files", "Reduce hardware", "Assign IPs"],
        correct: 1
      }
    ]
  },
  {
    id: "lec5",
    title: "Transport and Application Layer Protocols",
    label: "Lecture 5",
    questions: [
      {
        text: "What is the main role of the transport layer?",
        answers: [
          "Routing packets between networks",
          "Providing logical communication between processes",
          "Assigning IP addresses",
          "Encrypting data",
          "Managing hardware"
        ],
        correct: 1
      },
      {
        text: "Which of the following is a function of the transport layer?",
        answers: ["DNS resolution", "Segmentation of data", "URL formatting", "File storage", "Packet filtering"],
        correct: 1
      },
      {
        text: "Which organization assigns well-known port numbers?",
        answers: ["IEEE", "ISO", "IANA", "ITU", "ANSI"],
        correct: 2
      },
      {
        text: "What is the range of well-known ports?",
        answers: ["1024-49151", "49152-65535", "0-1023", "1000-2000", "2000-3000"],
        correct: 2
      },
      {
        text: "Which protocol is connectionless?",
        answers: ["TCP", "SCTP", "UDP", "HTTP", "FTP"],
        correct: 2
      },
      {
        text: "UDP is considered:",
        answers: [
          "Reliable and slow",
          "Unreliable but fast",
          "Secure and complex",
          "Stateful",
          "Connection-oriented"
        ],
        correct: 1
      },
      {
        text: "Which protocol provides reliable delivery?",
        answers: ["UDP", "DNS", "TCP", "HTTP", "SNMP"],
        correct: 2
      },
      {
        text: "Which port does HTTP use?",
        answers: ["21", "23", "25", "80", "110"],
        correct: 3
      },
      {
        text: "What type of communication does the transport layer provide?",
        answers: ["Host-to-host", "Process-to-process", "Router-to-router", "Network-to-network", "Device-to-device"],
        correct: 1
      },
      {
        text: "What is the range of registered ports?",
        answers: ["0-1023", "1024-49151", "49152-65535", "1-65535", "2000-6000"],
        correct: 1
      },
      {
        text: "Which of the following is NOT a feature of UDP?",
        answers: [
          "No connection establishment",
          "No flow control",
          "Acknowledgment mechanism",
          "Small header size",
          "No congestion control"
        ],
        correct: 2
      },
      {
        text: "Which applications commonly use UDP?",
        answers: ["HTTP and FTP", "Telnet and SMTP", "DNS and RIP", "FTP and POP3", "HTTP and DNS"],
        correct: 2
      },
      {
        text: "TCP ensures:",
        answers: [
          "Packet loss",
          "Out-of-order delivery",
          "Reliable, in-order delivery",
          "No sequencing",
          "No acknowledgment"
        ],
        correct: 2
      },
      {
        text: "Which of the following uses TCP?",
        answers: ["RIP", "DNS only", "HTTP", "SNMP", "DHCP"],
        correct: 2
      },
      {
        text: "SCTP combines features of:",
        answers: ["HTTP and FTP", "UDP and TCP", "DNS and DHCP", "SMTP and POP3", "Telnet and SSH"],
        correct: 1
      },
      {
        text: "What is the main function of the application layer?",
        answers: [
          "Data segmentation",
          "Interface for user interaction with network",
          "Packet routing",
          "Error detection",
          "Flow control"
        ],
        correct: 1
      },
      {
        text: "What does DNS do?",
        answers: [
          "Transfers files",
          "Assigns IP addresses dynamically",
          "Matches domain names with IP addresses",
          "Sends emails",
          "Encrypts data"
        ],
        correct: 2
      },
      {
        text: "Why is UDP considered faster than TCP?",
        answers: [
          "Uses encryption",
          "Has connection setup",
          "Minimal overhead and no congestion control",
          "Uses acknowledgments",
          "Requires sequencing"
        ],
        correct: 2
      },
      {
        text: "Which statement best describes HTTP?",
        answers: [
          "Stateful protocol",
          "Connectionless protocol",
          "Stateless protocol",
          "Transport protocol",
          "Encryption protocol"
        ],
        correct: 2
      },
      {
        text: "What is required for accessing a web page?",
        answers: ["Only IP address", "Only file name", "URL (address and file name)", "Only DNS", "Only browser"],
        correct: 2
      },
      {
        text: "Which step occurs first when accessing a website?",
        answers: ["Server sends HTML", "DNS resolution", "Browser renders page", "TCP closes connection", "HTTP response"],
        correct: 1
      },
      {
        text: "What is a disadvantage of HTTPS?",
        answers: ["No encryption", "Uses wrong port", "Slower due to encryption", "Stateless", "No certificates"],
        correct: 2
      },
      {
        text: "Which protocol assigns IP addresses automatically?",
        answers: ["FTP", "DNS", "DHCP", "SMTP", "HTTP"],
        correct: 2
      },
      {
        text: "FTP uses which ports?",
        answers: ["23 and 22", "80 and 443", "20 and 21", "25 and 110", "67 and 68"],
        correct: 2
      },
      {
        text: "What is the secure version of Telnet?",
        answers: ["FTP", "HTTPS", "SSH", "SMTP", "DNS"],
        correct: 2
      }
    ]
  },
  {
    id: "lec6",
    title: "Data Link Layer Protocols",
    label: "Lecture 6",
    questions: [
      {
        text: "What is the main responsibility of the data link layer?",
        answers: [
          "End-to-end communication",
          "Node-to-node data transfer",
          "IP address assignment",
          "Encryption",
          "Routing packets"
        ],
        correct: 1
      },
      {
        text: "The data link layer is divided into which two sublayers?",
        answers: ["TCP and UDP", "LLC and MAC", "DNS and DHCP", "HTTP and FTP", "ARP and IP"],
        correct: 1
      },
      {
        text: "Which function is part of Logical Link Control (LLC)?",
        answers: ["Media sharing", "Framing", "IP routing", "Encryption", "DNS resolution"],
        correct: 1
      },
      {
        text: "What does framing add to a message?",
        answers: ["Encryption keys", "Port numbers", "Sender and destination addresses", "IP addresses", "Passwords"],
        correct: 2
      },
      {
        text: "Flow control is used to:",
        answers: ["Encrypt frames", "Prevent receiver overload", "Route packets", "Assign MAC addresses", "Compress data"],
        correct: 1
      },
      {
        text: "What is a buffer?",
        answers: [
          "A routing table",
          "Temporary storage for incoming data",
          "Encryption key",
          "Protocol type",
          "Address mapping"
        ],
        correct: 1
      },
      {
        text: "Error control includes:",
        answers: [
          "Routing and forwarding",
          "Encryption and decryption",
          "Error detection and retransmission",
          "Compression and decompression",
          "Address resolution"
        ],
        correct: 2
      },
      {
        text: "What does ARQ stand for?",
        answers: [
          "Automatic Routing Query",
          "Automatic Repeat Request",
          "Address Resolution Query",
          "Advanced Routing Quality",
          "Automatic Response Queue"
        ],
        correct: 1
      },
      {
        text: "In Stop-and-Wait protocol, the sender:",
        answers: [
          "Sends multiple frames continuously",
          "Sends one frame and waits for acknowledgment",
          "Never waits for response",
          "Sends frames randomly",
          "Sends only acknowledgments"
        ],
        correct: 1
      },
      {
        text: "Sliding window protocols improve:",
        answers: ["Security", "Efficiency of transmission", "Encryption", "Addressing", "Authentication"],
        correct: 1
      },
      {
        text: "In Go-back-N, if frame k is lost:",
        answers: [
          "Only frame k is retransmitted",
          "All frames are ignored permanently",
          "Frames from k onward are retransmitted",
          "No retransmission occurs",
          "Only last frame is retransmitted"
        ],
        correct: 2
      },
      {
        text: "Selective Repeat protocol:",
        answers: [
          "Retransmits all frames",
          "Retransmits only lost or damaged frames",
          "Does not use acknowledgment",
          "Uses only one frame",
          "Ignores errors"
        ],
        correct: 1
      },
      {
        text: "Point-to-point access means:",
        answers: [
          "Shared communication link",
          "Dedicated link between two devices",
          "Wireless communication only",
          "Multiple devices sharing link",
          "Random transmission"
        ],
        correct: 1
      },
      {
        text: "Multiple access occurs when:",
        answers: [
          "Only one device uses the link",
          "Devices share a communication link",
          "No communication exists",
          "Only routers communicate",
          "Encryption is enabled"
        ],
        correct: 1
      },
      {
        text: "In random access methods:",
        answers: [
          "One station controls others",
          "Transmission is scheduled",
          "Stations transmit randomly",
          "Only one station exists",
          "No collisions occur"
        ],
        correct: 2
      },
      {
        text: "What happens during a collision?",
        answers: [
          "Frames are encrypted",
          "Frames are destroyed or modified",
          "Frames are compressed",
          "Frames are delayed",
          "Frames are duplicated"
        ],
        correct: 1
      },
      {
        text: "CSMA/CD is used to:",
        answers: ["Avoid collisions only", "Detect collisions", "Encrypt data", "Assign IP addresses", "Route packets"],
        correct: 1
      },
      {
        text: "In controlled access, a station can transmit only when:",
        answers: [
          "It decides randomly",
          "Authorized by other stations",
          "Buffer is full",
          "No other station exists",
          "It detects collision"
        ],
        correct: 1
      },
      {
        text: "Channelization divides bandwidth using:",
        answers: ["Encryption", "Routing tables", "Time, frequency, or code", "MAC addresses", "Buffers"],
        correct: 2
      },
      {
        text: "ARP is used to:",
        answers: ["Map MAC to IP", "Map IP to MAC", "Assign IP dynamically", "Encrypt data", "Detect errors"],
        correct: 1
      },
      {
        text: "ARP request is:",
        answers: ["Unicast", "Broadcast", "Multicast", "Encrypted", "Routed"],
        correct: 1
      },
      {
        text: "What is the main purpose of STP?",
        answers: ["Increase bandwidth", "Prevent switching loops", "Encrypt traffic", "Assign IP addresses", "Compress data"],
        correct: 1
      },
      {
        text: "HDLC is:",
        answers: [
          "Byte-oriented protocol",
          "Bit-oriented protocol",
          "Application layer protocol",
          "Encryption protocol",
          "Routing protocol"
        ],
        correct: 1
      },
      {
        text: "PPP supports:",
        answers: [
          "Multipoint links only",
          "Point-to-point links only",
          "No authentication",
          "No error detection",
          "Only routing"
        ],
        correct: 1
      },
      {
        text: "Which protocol prevents broadcast storms caused by loops?",
        answers: ["ARP", "FTP", "STP", "DNS", "DHCP"],
        correct: 2
      }
    ]
  }
];

function mcq(text, answers, correct, difficulty) {
  return { text, answers, correct, difficulty };
}

const allLectureQuestions = [
  mcq("What is network architecture?", ["A set of layers and protocols", "A list of cables only", "A group of power rules", "A storage method", "A single router table"], 0, "easy"),
  mcq("Why are networks organized as layers?", ["To reduce design complexity", "To remove all interfaces", "To prevent protocol use", "To increase cabling only", "To replace addressing"], 0, "easy"),
  mcq("What exists between adjacent layers in a protocol hierarchy?", ["An interface", "A modem", "A password", "A routing loop", "A broadcast storm"], 0, "easy"),
  mcq("What does a network protocol define?", ["Rules and conventions for communication", "Only the color of cables", "Only electrical power limits", "Only file names", "Only monitor settings"], 0, "easy"),
  mcq("Which item is part of the protocol process?", ["The format or structure of the message", "The price of a switch", "The size of a screen", "The brand of a server", "The room temperature"], 0, "easy"),
  mcq("What does OSI stand for?", ["Open Systems Interconnection", "Online Service Interface", "Open Signal Internet", "Optical System Integration", "Operating Security Index"], 0, "easy"),
  mcq("Which organization developed the OSI model?", ["International Standards Organization", "Internet Service Provider", "Routing Information Protocol", "Dynamic Host Configuration Group", "Address Resolution Board"], 0, "easy"),
  mcq("What is the Physical layer mainly responsible for?", ["Transmitting bits over the medium", "Routing packets between networks", "Encrypting data text", "Managing sessions", "Translating file formats"], 0, "easy"),
  mcq("Which devices are listed as Physical layer devices?", ["Repeaters and hubs", "Routers and gateways", "Browsers and servers", "Bridges and switches only", "Firewalls and DNS servers"], 0, "easy"),
  mcq("What delivery does the Data Link layer provide?", ["Node-to-node delivery", "Process-to-process delivery", "Application-to-application delivery", "Domain-to-domain naming", "End-user authentication"], 0, "easy"),
  mcq("What addressing is associated with the Data Link layer?", ["Physical MAC addressing", "Port addressing", "URL addressing", "Process addressing", "Email addressing"], 0, "easy"),
  mcq("What is the main job of the Network layer?", ["Routing packets from source to destination", "Compressing images", "Managing dialogue control only", "Running web pages", "Formatting emails"], 0, "easy"),
  mcq("What addressing is associated with the Network layer?", ["Logical IP addressing", "Only MAC addressing", "Only port numbering", "Only domain names", "Only usernames"], 0, "easy"),
  mcq("What does the Transport layer provide?", ["Reliable process-to-process message delivery and error recovery", "Electrical specifications for cables", "Only DNS lookup", "Only frame switching", "Only screen display"], 0, "easy"),
  mcq("Which two transport protocols are listed in the OSI layer table?", ["TCP and UDP", "HTTP and FTP", "ARP and STP", "PPP and HDLC", "DNS and DHCP"], 0, "easy"),
  mcq("What does the Session layer allow users to establish?", ["Sessions between different machines", "Physical cables", "MAC addresses", "IP classes", "Broadcast domains only"], 0, "easy"),
  mcq("Which layer is concerned with syntax and semantics of information?", ["Presentation layer", "Physical layer", "Network layer", "Data Link layer", "Transport layer"], 0, "easy"),
  mcq("Which layer provides commonly needed protocols such as FTP and HTTP?", ["Application layer", "Physical layer", "Network layer", "Data Link layer", "Session layer"], 0, "easy"),
  mcq("How many original layers are defined in the TCP/IP model in the source?", ["Four", "Five", "Six", "Seven", "Eight"], 0, "easy"),
  mcq("Which TCP/IP layer is listed as Layer 4?", ["Application", "Internet", "Network Access", "Physical", "Session"], 0, "easy"),
  mcq("What does PDU stand for?", ["Protocol Data Unit", "Private Data Utility", "Packet Device Unit", "Protocol Device Usage", "Physical Data User"], 0, "easy"),
  mcq("What PDU is associated with the Transport layer?", ["Segment", "Packet", "Frame", "Bit", "Signal"], 0, "easy"),
  mcq("What PDU is associated with the Network layer?", ["Packet", "Frame", "Segment", "Bit", "Message only"], 0, "easy"),
  mcq("What PDU is associated with the Data Link layer?", ["Frame", "Packet", "Segment", "Datagram header only", "Port"], 0, "easy"),
  mcq("What is the size of an IPv4 address?", ["32 bits", "64 bits", "96 bits", "128 bits", "256 bits"], 0, "easy"),
  mcq("What is the minimum IPv4 header size?", ["20 bytes", "10 bytes", "32 bytes", "40 bytes", "60 bytes"], 0, "easy"),
  mcq("Which IPv4 header field identifies the IP version?", ["Version", "TTL", "Protocol", "Checksum", "Flags"], 0, "easy"),
  mcq("What does TTL stand for?", ["Time to Live", "Total Transmission Length", "Transfer Type Limit", "Traffic Timer Label", "Tunnel Time Link"], 0, "easy"),
  mcq("Which IPv4 header field identifies the next-level protocol?", ["Protocol", "Version", "TTL", "Flags", "Fragment offset"], 0, "easy"),
  mcq("What is the size of an IPv6 address?", ["128 bits", "32 bits", "48 bits", "64 bits", "96 bits"], 0, "easy"),
  mcq("What notation does IPv6 use to make addresses more readable?", ["Hexadecimal colon notation", "Decimal dot notation only", "Binary slash notation", "MAC dash notation", "Port comma notation"], 0, "easy"),
  mcq("What does the IPv6 double colon represent?", ["Compression of consecutive zero sections", "Start of a password", "End of a MAC address", "A broadcast marker", "A TCP connection"], 0, "easy"),
  mcq("Which protocol maps IP addresses to MAC addresses?", ["ARP", "DNS", "DHCP", "HTTP", "RIP"], 0, "easy"),
  mcq("What is an ARP request?", ["Broadcast", "Unicast", "Encrypted only", "Routed across all ASes", "A TCP segment"], 0, "easy"),
  mcq("What is the main purpose of STP?", ["Prevent loops and broadcast storms in switched networks", "Assign IP addresses to hosts", "Encrypt application data", "Compress Ethernet frames", "Translate domain names"], 0, "easy"),

  mcq("Why can different hardware and software work together in a layered model?", ["Each layer follows functions and interfaces that support other layers", "All layers use the same cable", "Routers remove the need for protocols", "IP addresses replace all headers", "Applications directly control electrical signals"], 0, "medium"),
  mcq("In data encapsulation, what may Layer 2 add that other layers may not?", ["A trailer", "A TTL value", "A DNS name", "A port table", "A routing metric"], 0, "medium"),
  mcq("Which OSI layer provides end-to-end flow control?", ["Transport layer", "Data Link layer", "Physical layer", "Application layer", "Presentation layer"], 0, "medium"),
  mcq("Which OSI layer provides access control and error handling for frames?", ["Data Link layer", "Session layer", "Presentation layer", "Application layer", "Network layer only"], 0, "medium"),
  mcq("Which statement correctly compares OSI and TCP/IP from the source?", ["TCP/IP was developed prior to OSI and its layers do not exactly match OSI", "OSI was created only for IPv6", "TCP/IP has seven original layers", "OSI has no application layer", "TCP/IP has no transport layer"], 0, "medium"),
  mcq("Which TCP/IP layer corresponds most directly to OSI Network layer functions?", ["Internet layer", "Application layer", "Transport layer", "Network Access layer", "Session layer"], 0, "medium"),
  mcq("In the delivery/addressing table, which layer uses port or socket addressing?", ["Transport layer", "Physical layer", "Data Link layer", "Network layer", "Presentation layer"], 0, "medium"),
  mcq("Which device is associated with the Network layer in the OSI table?", ["Router", "Hub", "Repeater", "Bridge", "Application server"], 0, "medium"),
  mcq("What is an IPv4 datagram?", ["A variable-length packet made of header and data", "A fixed electrical signal", "A MAC address table", "A DNS record only", "A session password"], 0, "medium"),
  mcq("What is the maximum IPv4 datagram size?", ["65,535 bytes", "1,024 bytes", "4,096 bytes", "32,768 bytes", "131,072 bytes"], 0, "medium"),
  mcq("Which IPv4 field supports fragment identification?", ["Identification", "TTL", "Protocol", "Version", "Header checksum"], 0, "medium"),
  mcq("Which IPv4 field checks only the header for errors?", ["Header checksum", "TTL", "Source address", "Protocol", "Flags"], 0, "medium"),
  mcq("What problem is associated with classful IPv4 addressing?", ["Wasting IP addresses", "Removing all routers", "Increasing MAC address size", "Stopping subnetting", "Eliminating private addresses"], 0, "medium"),
  mcq("What does subnetting do?", ["Divides a large network into smaller subnetworks", "Converts TCP to UDP", "Encrypts IP packets", "Removes the network ID", "Prevents all routing"], 0, "medium"),
  mcq("What happens when one host bit is borrowed in subnetting?", ["The number of subnets doubles", "The number of routers becomes zero", "The TTL field disappears", "The MAC address changes length", "The header checksum becomes optional"], 0, "medium"),
  mcq("What does VLSM stand for?", ["Variable Length Subnet Mask", "Virtual Link Security Method", "Verified Logical Switching Mode", "Variable Layer Session Model", "Virtual LAN Service Metric"], 0, "medium"),
  mcq("What is the main function of NAT?", ["Map internal addresses to external addresses", "Replace DNS completely", "Detect Ethernet collisions", "Assign MAC addresses", "Compress IPv6 headers"], 0, "medium"),
  mcq("What is port forwarding or port mapping used for?", ["Making a service on an internal network available to outside hosts", "Changing all frames into bits", "Preventing switches from learning", "Compressing data streams", "Replacing TCP acknowledgments"], 0, "medium"),
  mcq("Which IPv6 feature reduces the need for NAT?", ["Every node can have a unique global IPv6 address", "IPv6 removes routing", "IPv6 uses only broadcast", "IPv6 has 32-bit addresses", "IPv6 cannot use DHCP"], 0, "medium"),
  mcq("What communication type substitutes the need for broadcasting in IPv6?", ["Multicast", "Port forwarding", "Classful addressing", "Stop-and-Wait", "Process switching"], 0, "medium"),
  mcq("Which IPv6 address type delivers to the nearest member of a group?", ["Anycast", "Broadcast", "Loopback", "Privatecast", "Portcast"], 0, "medium"),
  mcq("What are the three transition strategies from IPv4 to IPv6 listed in the source?", ["Dual stack, tunneling, and header translation", "NAT, DNS, and DHCP", "ARP, STP, and PPP", "RIP, OSPF, and BGP", "TCP, UDP, and SCTP"], 0, "medium"),
  mcq("When is IPv6 tunneling used?", ["When IPv6 computers communicate through a region that uses IPv4", "When a switch detects a loop", "When DHCP assigns a MAC address", "When UDP needs reliability", "When DNS stores a route"], 0, "medium"),
  mcq("Why is ICMP needed according to the source?", ["To compensate for IP deficiencies such as best-effort delivery and lack of error reporting", "To encrypt all IP headers", "To assign IP addresses dynamically", "To replace TCP", "To compress application data"], 0, "medium"),
  mcq("How are ICMP messages carried?", ["Encapsulated inside IP datagrams", "Directly passed to the data link layer", "Only inside TCP segments", "Only inside UDP datagrams", "As Ethernet trailers only"], 0, "medium"),
  mcq("Which two broad categories of ICMP messages are listed?", ["Error-reporting and query messages", "Static and dynamic messages", "TCP and UDP messages", "Private and public messages", "Classful and classless messages"], 0, "medium"),
  mcq("What ICMP messages are used by ping?", ["Echo request and echo reply", "Discover and offer", "SYN and ACK", "Request and response DNS records", "Hello and update packets"], 0, "medium"),
  mcq("What is the purpose of traceroute?", ["Record the route to a destination", "Assign IPv6 addresses", "Encrypt tunnel mode packets", "Create switching loops", "Resolve names into ports"], 0, "medium"),
  mcq("What is the DHCP message sequence shown in the source?", ["Discover, offer, request, ack", "Offer, discover, ack, request", "Request, discover, offer, ack", "Ack, request, offer, discover", "Discover, request, ack, offer"], 0, "medium"),
  mcq("Why is a DHCP relay agent needed?", ["Broadcast DHCP requests cannot pass routers", "DHCP cannot provide DNS information", "TCP has no ports", "ARP replies are broadcasts", "IPv6 cannot autoconfigure"], 0, "medium"),
  mcq("What can DHCP return besides an allocated IP address?", ["Subnet mask, default gateway, and DNS server information", "Only MAC address length", "Only Ethernet frame size", "Only ICMP type numbers", "Only OSPF areas"], 0, "medium"),
  mcq("What is IPSec?", ["A collection of security protocols for the IP layer", "A link-state routing algorithm", "A data link framing method", "A DHCP address pool", "A transport port range"], 0, "medium"),
  mcq("Which organization designed IPSec according to the source?", ["IETF", "ISO", "IEEE", "ANSI", "ITU"], 0, "medium"),
  mcq("What does IPSec help create?", ["Authenticated and confidential packets", "Broadcast storms", "Classful address blocks", "DNS zone files", "MAC learning tables"], 0, "medium"),
  mcq("Which IPSec mode does not protect the original IP header?", ["Transport mode", "Tunnel mode", "Controlled mode", "Random mode", "Channelized mode"], 0, "medium"),
  mcq("What is packet forwarding?", ["Moving a packet within a node between interfaces", "Building routing protocols only", "Translating DNS names", "Assigning a private address", "Compressing TCP data"], 0, "medium"),
  mcq("Which lookup method is used in forwarding tables?", ["Longest prefix match", "Shortest suffix match", "Random route match", "Exact MAC-only match", "Port-first match"], 0, "medium"),
  mcq("What happens if TTL reaches zero during forwarding?", ["The packet is discarded", "The packet is encrypted", "The packet is duplicated", "The packet becomes IPv6", "The packet is stored forever"], 0, "medium"),
  mcq("What is process switching?", ["CPU processes every packet", "Hardware forwards every packet", "Only the first packet is processed", "The route is encrypted", "The frame is broadcast"], 0, "medium"),
  mcq("What is Cisco Express Forwarding based on?", ["Precomputed forwarding information", "No routing table", "Only ARP broadcasts", "Manual DNS entries", "Application-layer sessions"], 0, "medium"),

  mcq("Which statement best defines routing in the source?", ["Forwarding packets between networks by choosing the best path from the routing table", "Encrypting data between applications", "Mapping IP addresses to MAC addresses", "Dividing frames into bits", "Assigning a DHCP address"], 0, "hard"),
  mcq("What does a routing table contain according to the source?", ["Only the best routes for every destination", "Every physically possible cable path", "Only failed links", "Only DNS server names", "Only encrypted tunnels"], 0, "hard"),
  mcq("What is the key difference between static and dynamic routing?", ["Static is manually configured; dynamic learns routes automatically through routing protocols", "Static uses no routes; dynamic uses no routers", "Static is for IPv6 only; dynamic is for IPv4 only", "Static uses DNS; dynamic uses ARP", "Static uses UDP only; dynamic uses TCP only"], 0, "hard"),
  mcq("Which dynamic routing algorithms are listed as major examples?", ["Distance Vector and Link State", "Stop-and-Wait and Selective Repeat", "ARP and STP", "DHCP and DNS", "HTTP and HTTPS"], 0, "hard"),
  mcq("What is a routing metric?", ["A method used by routing algorithms to decide which route is better", "A password used by routers", "A way to compress frames", "A DHCP lease time only", "A DNS record type"], 0, "hard"),
  mcq("What distinguishes intra-domain from inter-domain routing in the source context?", ["Intra-domain occurs inside an autonomous system; inter-domain occurs between autonomous systems", "Intra-domain uses only HTTP; inter-domain uses only FTP", "Intra-domain is data link only; inter-domain is physical only", "Intra-domain requires no routers; inter-domain requires no tables", "Intra-domain uses frames; inter-domain uses signals"], 0, "hard"),
  mcq("What is Distance Vector Routing based on?", ["The least-cost goal with regular sharing of routing information", "Only link-state databases", "Only DNS records", "Only MAC broadcast tables", "Only TCP acknowledgments"], 0, "hard"),
  mcq("What metric does RIP use for path selection?", ["Hop count", "Encryption level", "Port number", "Frame size", "DNS response time"], 0, "hard"),
  mcq("What is the RIP periodic routing-update timer value stated in the source?", ["30 seconds", "5 seconds", "60 seconds", "90 seconds", "120 seconds"], 0, "hard"),
  mcq("Compared with distance vector routing, what resource does link state routing require more of?", ["Memory", "MAC addresses", "Port numbers", "DHCP offers", "Application names"], 0, "hard"),
  mcq("What routing algorithm does OSPF use?", ["Link state routing", "Distance vector routing only", "Path vector routing only", "Stop-and-Wait", "CSMA/CD"], 0, "hard"),
  mcq("What characterizes path vector routing?", ["Routers advertise the full path, not just distance or next hop", "Routers send only frame checksums", "Routers use no autonomous systems", "Hosts broadcast DHCP offers", "Switches disable all redundant links permanently"], 0, "hard"),
  mcq("How does path vector routing help prevent loops?", ["By detecting whether the local AS is already in the advertised path", "By deleting all routing tables", "By turning broadcasts into unicasts", "By reducing IPv6 address length", "By disabling TCP ports"], 0, "hard"),
  mcq("What is BGP used for?", ["Inter-domain routing between autonomous systems", "Local frame retransmission", "MAC address resolution", "DHCP message exchange", "Transport-layer segmentation"], 0, "hard"),
  mcq("Which port range is assigned to well-known ports?", ["0-1023", "1024-49151", "49152-65535", "2048-4096", "32768-65535"], 0, "hard"),
  mcq("Why is UDP considered simple and fast in the source?", ["It has minimum overhead, no handshaking, and no congestion control", "It establishes a virtual connection", "It guarantees in-order delivery", "It uses flow and error control like TCP", "It always retransmits damaged frames"], 0, "hard"),
  mcq("Which applications are listed as using UDP?", ["RIP, DNS, SNMP, and streaming multimedia", "HTTP, FTP, SMTP, and Telnet only", "PPP, HDLC, STP, and ARP", "OSPF, BGP, HTTP, and FTP only", "DHCP, HTTPS, SSH, and Telnet only"], 0, "hard"),
  mcq("How is TCP described compared with UDP?", ["Connection-oriented and reliable, using flow and error control", "Connectionless and best-effort only", "A layer 2 protocol", "A name-resolution protocol", "A broadcast-only protocol"], 0, "hard"),
  mcq("Which user application protocols are listed as using TCP?", ["Telnet, SMTP, HTTP, and FTP", "RIP, DNS, SNMP, and DHCP only", "ARP, STP, HDLC, and PPP", "ICMP, IPSec, NAT, and VLSM", "OSPF, BGP, RIP, and ARP only"], 0, "hard"),
  mcq("What is the application layer interface responsible for?", ["Providing the interface between applications on either end of the network", "Selecting the electrical medium", "Choosing the shortest physical cable", "Updating a switch's CAM table", "Borrowing host bits"], 0, "hard"),
  mcq("Which ports are associated with DNS and DHCP in the source?", ["DNS 53; DHCP 67 and 68", "DNS 80; DHCP 20 and 21", "DNS 443; DHCP 25 and 110", "DNS 23; DHCP 22", "DNS 161; DHCP 53"], 0, "hard"),
  mcq("Which statement about HTTP is directly supported by the source?", ["HTTP uses a TCP connection and port 80", "HTTP is a data link protocol", "HTTP uses only UDP port 53", "HTTP prevents switching loops", "HTTP maps IP to MAC"], 0, "hard"),
  mcq("What is DNS used for in the source?", ["Identifying hosts on the Internet by matching names with addresses", "Forwarding packets by hop count", "Preventing frame collisions", "Encrypting IP headers", "Borrowing subnet bits"], 0, "hard"),
  mcq("Which ports does FTP use according to the source?", ["TCP port 21 for commands and TCP port 20 for actual data", "UDP port 67 for commands and 68 for data", "TCP port 80 for commands and 443 for data", "UDP port 53 for commands and data", "TCP port 23 for commands and 22 for data"], 0, "hard"),
  mcq("What are the two sublayers of the Data Link layer?", ["Logical Link Control and Media Access Control", "TCP and UDP", "DNS and DHCP", "Application and Presentation", "Transport and Internet"], 0, "hard"),
  mcq("What does framing do in the Data Link layer?", ["Separates a message from one source to a destination and adds sender and destination addresses", "Assigns IPv6 global prefixes", "Finds the best interdomain route", "Creates DHCP leases", "Compresses application data"], 0, "hard"),
  mcq("What two responsibilities are collectively known as data link control?", ["Flow control and error control", "DNS and DHCP", "Routing and subnetting", "Compression and encryption only", "Tunneling and translation"], 0, "hard"),
  mcq("What does ARQ mean in the Data Link layer discussion?", ["Automatic Repeat Request", "Address Routing Query", "Application Reply Queue", "Autonomous Route Quality", "Automatic Relay Quota"], 0, "hard"),
  mcq("How does Go-back-N respond when frame k is missing?", ["It discards subsequent frames and retransmits from k onward", "It retransmits only the last frame", "It never retransmits", "It converts frames to IPv6", "It broadcasts an ARP request"], 0, "hard"),
  mcq("How does Selective Repeat differ from Go-back-N?", ["It resends only frames that are actually lost or damaged", "It resends all frames after every acknowledgment", "It does not buffer frames", "It does not use timeouts", "It works only at the application layer"], 0, "hard"),
  mcq("What is channelization in multiple access?", ["Sharing link bandwidth in time, frequency, or code", "Mapping IP addresses to MAC addresses", "Replacing TCP with UDP", "Translating IPv6 headers to IPv4", "Sending routing tables every 30 seconds"], 0, "hard"),
  mcq("What is the difference between CSMA/CD and CSMA/CA in the source?", ["CSMA/CD tells a station what to do when collision is detected; CSMA/CA tries to avoid collision", "CSMA/CD is for DNS; CSMA/CA is for DHCP", "CSMA/CD assigns IP; CSMA/CA assigns MAC", "CSMA/CD is link state; CSMA/CA is distance vector", "CSMA/CD is tunnel mode; CSMA/CA is transport mode"], 0, "hard"),
  mcq("What is HDLC's primary purpose?", ["Reliable, error-free, orderly frame transmission over synchronous serial links", "Domain name resolution", "Dynamic IP address allocation", "Broadcast storm creation", "Application-layer web access"], 0, "hard"),
  mcq("Which comparison between HDLC and PPP is correct?", ["HDLC is bit-oriented; PPP is byte-oriented", "HDLC has authentication; PPP has none", "HDLC supports only point-to-point; PPP supports multipoint", "HDLC has no error detection; PPP has recovery", "HDLC encapsulates PPPoE inside Ethernet"], 0, "hard"),
  mcq("What is PPPoE?", ["A protocol that encapsulates PPP frames inside Ethernet frames", "A path vector routing protocol", "A DHCP broadcast message", "An IPv6 compression rule", "An ICMP error-reporting type"], 0, "hard")
];

lectures.push({
  id: "all-lectures",
  title: "Computer Network Protocols",
  label: "All Lectures",
  questions: allLectureQuestions
});

const state = {
  lectureIndex: 0,
  questionIndex: 0,
  mode: "study",
  showAll: false,
  answers: {},
  submitted: {},
  optionOrders: {}
};

const letters = ["A", "B", "C", "D", "E"];
const lectureList = document.querySelector("#lectureList");
const lectureEyebrow = document.querySelector("#lectureEyebrow");
const lectureTitle = document.querySelector("#lectureTitle");
const questionHost = document.querySelector("#questionHost");
const questionCounter = document.querySelector("#questionCounter");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const scoreText = document.querySelector("#scoreText");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const studyModeBtn = document.querySelector("#studyModeBtn");
const examModeBtn = document.querySelector("#examModeBtn");
const showAllBtn = document.querySelector("#showAllBtn");

function currentLecture() {
  return lectures[state.lectureIndex];
}

function answerKey(questionIndex = state.questionIndex) {
  return `${currentLecture().id}-${questionIndex}`;
}

function shuffledIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);

  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[randomIndex]] = [indexes[randomIndex], indexes[index]];
  }

  return indexes;
}

function optionOrder(questionIndex = state.questionIndex) {
  const key = answerKey(questionIndex);

  if (!state.optionOrders[key]) {
    state.optionOrders[key] = shuffledIndexes(currentLecture().questions[questionIndex].answers.length);
  }

  return state.optionOrders[key];
}

function isCurrentLectureSubmitted() {
  return state.submitted[currentLecture().id] === true;
}

function renderLectures() {
  lectureList.innerHTML = lectures
    .map((lecture, index) => `
      <button class="lecture-item ${index === state.lectureIndex ? "active" : ""}" type="button" data-lecture="${index}">
        <strong>${lecture.label}</strong>
        <span>${lecture.title} - ${lecture.questions.length} questions</span>
      </button>
    `)
    .join("");
}

function getAnsweredCount() {
  return currentLecture().questions.filter((_, index) => state.answers[answerKey(index)] !== undefined).length;
}

function getCorrectCount() {
  return currentLecture().questions.filter((question, index) => state.answers[answerKey(index)] === question.correct).length;
}

function renderStats() {
  const total = currentLecture().questions.length;
  const answered = getAnsweredCount();
  const correct = getCorrectCount();
  const score = answered === 0 ? 0 : Math.round((correct / answered) * 100);

  progressText.textContent = `${answered} / ${total}`;
  progressBar.style.width = `${(answered / total) * 100}%`;
  scoreText.textContent = state.mode === "exam" && !isCurrentLectureSubmitted() ? "Pending" : `${score}%`;
  questionCounter.textContent = `Question ${state.questionIndex + 1} of ${total}`;
}

function renderQuestion() {
  const lecture = currentLecture();
  const question = lecture.questions[state.questionIndex];
  const selected = state.answers[answerKey()];
  const shouldReveal = state.mode === "exam"
    ? isCurrentLectureSubmitted()
    : state.showAll || selected !== undefined;
  const order = optionOrder();
  const correctDisplayIndex = order.indexOf(question.correct);

  lectureEyebrow.textContent = lecture.label;
  lectureTitle.textContent = lecture.title;
  questionHost.innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span>${lecture.label}</span>
        <span>${state.mode === "study" ? "Instant feedback" : isCurrentLectureSubmitted() ? "Results submitted" : "Results hidden until submit"}</span>
      </div>
      <h3>${state.questionIndex + 1}. ${question.text}</h3>
      <div class="answers">
        ${order.map((originalIndex, displayIndex) => {
          const answer = question.answers[originalIndex];
          const isCorrect = originalIndex === question.correct;
          const isSelected = originalIndex === selected;
          const resultClass = [
            isSelected ? "selected" : "",
            shouldReveal && isCorrect ? "correct" : "",
            shouldReveal && isSelected && !isCorrect ? "wrong" : ""
          ].filter(Boolean).join(" ");

          return `
            <button class="answer-option ${resultClass}" type="button" data-answer="${originalIndex}" aria-pressed="${isSelected}">
              <span class="answer-letter">${letters[displayIndex]}</span>
              <span class="answer-text">${answer}</span>
            </button>
          `;
        }).join("")}
      </div>
      ${shouldReveal ? `<div class="feedback">Correct answer: ${letters[correctDisplayIndex]}. ${question.answers[question.correct]}</div>` : ""}
    </article>
  `;

  prevBtn.disabled = state.questionIndex === 0;
  nextBtn.disabled = state.questionIndex === lecture.questions.length - 1;
  renderStats();
}

function render() {
  renderLectures();
  renderQuestion();
  studyModeBtn.classList.toggle("active", state.mode === "study");
  examModeBtn.classList.toggle("active", state.mode === "exam");
  showAllBtn.classList.toggle("primary-action", state.mode === "exam" && !isCurrentLectureSubmitted());
  showAllBtn.textContent = state.mode === "exam"
    ? isCurrentLectureSubmitted() ? "Hide results" : "Submit exam"
    : state.showAll ? "Hide all answers" : "Show all answers";
}

lectureList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lecture]");
  if (!button) return;

  state.lectureIndex = Number(button.dataset.lecture);
  state.questionIndex = 0;
  state.showAll = false;
  render();
});

questionHost.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;

  state.answers[answerKey()] = Number(button.dataset.answer);
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  state.questionIndex = Math.max(0, state.questionIndex - 1);
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  state.questionIndex = Math.min(currentLecture().questions.length - 1, state.questionIndex + 1);
  renderQuestion();
});

resetBtn.addEventListener("click", () => {
  currentLecture().questions.forEach((_, index) => {
    delete state.answers[answerKey(index)];
    delete state.optionOrders[answerKey(index)];
  });
  delete state.submitted[currentLecture().id];
  state.questionIndex = 0;
  state.showAll = false;
  render();
});

studyModeBtn.addEventListener("click", () => {
  state.mode = "study";
  state.showAll = false;
  render();
});

examModeBtn.addEventListener("click", () => {
  state.mode = "exam";
  state.showAll = false;
  render();
});

showAllBtn.addEventListener("click", () => {
  if (state.mode === "exam") {
    state.submitted[currentLecture().id] = !isCurrentLectureSubmitted();
  } else {
    state.showAll = !state.showAll;
  }
  render();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const answerIndex = letters.indexOf(key);

  if (answerIndex !== -1) {
    state.answers[answerKey()] = answerIndex;
    renderQuestion();
  }

  if (event.key === "ArrowLeft") prevBtn.click();
  if (event.key === "ArrowRight") nextBtn.click();
});

render();
